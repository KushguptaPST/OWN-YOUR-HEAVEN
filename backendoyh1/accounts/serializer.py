from rest_framework_mongoengine.serializers import DocumentSerializer
from .models import UserDocument, Hotel, Booking

# ------------------- User Serializer -------------------
class UserSerializer(DocumentSerializer):
    class Meta:
        model = UserDocument
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

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


