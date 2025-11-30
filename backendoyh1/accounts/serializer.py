from rest_framework import serializers
from .models import UserDocument
from rest_framework_mongoengine.serializers import DocumentSerializer
from .models import Hotel

class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    def create(self, validated_data):
        user = UserDocument(**validated_data)
        user.save()
        return user



class HotelSerializer(DocumentSerializer):
    class Meta:
        model = Hotel
        fields = "__all__"

