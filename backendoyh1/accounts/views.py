from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import UserSerializer
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken

# Registration API
class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

# Protected API example
class ProtectedView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response({'status': 'You have access!'})
