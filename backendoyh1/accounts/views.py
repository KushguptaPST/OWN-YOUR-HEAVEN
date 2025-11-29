from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserDocument
from .serializer import UserSerializer
from django.conf import settings
import jwt
from datetime import datetime, timedelta

# Signup
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


# Login
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = UserDocument.objects(username=username).first()
        if not user or user.password != password:  # Use hashed password in production
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        payload = {
            "user_id": str(user.id),
            "username": user.username,
            "exp": datetime.utcnow() + timedelta(hours=1),
            "iat": datetime.utcnow()
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
        return Response({"access": token})


# Protected route example
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
