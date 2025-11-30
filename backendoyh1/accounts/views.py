from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserDocument, Hotel, Booking
from .serializer import UserSerializer, HotelSerializer, BookingSerializer
from django.conf import settings
import jwt
from datetime import datetime, timedelta
from mongoengine.errors import DoesNotExist, ValidationError
from bson import ObjectId

# ------------------- Signup -------------------
class SignupView(APIView):
    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")

        if UserDocument.objects(username=username).first():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        if UserDocument.objects(email=email).first():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ------------------- Login -------------------
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = UserDocument.objects(username=username).first()
        if not user or user.password != password:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        payload = {
            "user_id": str(user.id),
            "username": user.username,
            "exp": datetime.utcnow() + timedelta(hours=1),
            "iat": datetime.utcnow()
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
        return Response({"access": token})

# ------------------- Protected -------------------
class ProtectedView(APIView):
    def get(self, request):
        auth_header = request.headers.get("Authorization")
        if not auth_header:
            return Response({"error": "No token provided"}, status=status.HTTP_401_UNAUTHORIZED)

        token = auth_header.split(" ")[1]
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            return Response({"error": "Token expired"}, status=status.HTTP_401_UNAUTHORIZED)
        except jwt.InvalidTokenError:
            return Response({"error": "Invalid token"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({"message": f"Hello {payload['username']}! This is protected."})

# ------------------- Hotels -------------------
class HotelList(APIView):
    def get(self, request):
        hotels = Hotel.objects()
        serializer = HotelSerializer(hotels, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = HotelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HotelDetail(APIView):
    def get(self, request, hotel_id):
        try:
            hotel = Hotel.objects.get(id=ObjectId(hotel_id))
            serializer = HotelSerializer(hotel)
            return Response(serializer.data)
        except (DoesNotExist, ValidationError):
            return Response({"error": "Hotel not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ------------------- Bookings -------------------
class BookingCreateView(APIView):
    def post(self, request):
        data = request.data.copy()
        # Ensure hotelId is stored as string
        if 'hotelId' in data:
            data['hotelId'] = str(data['hotelId'])
        
        serializer = BookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Booking successful", "booking": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"error": "Booking failed", "details": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

