from rest_framework import serializers
from .models import UserDocument
from rest_framework_mongoengine.serializers import DocumentSerializer
from .models import Hotel,Booking

class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    def create(self, validated_data):
        user = UserDocument(**validated_data)
        user.save()
        return user

# ------------------- Hotel Serializer -------------------
class HotelSerializer(DocumentSerializer):
    class Meta:
        model = Hotel
        fields = "__all__"

# ------------------- Booking Serializer -------------------
class BookingSerializer(DocumentSerializer):
    class Meta:
        model = Booking
        fields = ['hotelId', 'name', 'email', 'phone', 'checkIn', 'checkOut', 'guests']


