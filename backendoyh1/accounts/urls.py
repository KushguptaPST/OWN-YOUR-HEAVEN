from django.urls import path
from .views import SignupView, LoginView, ProtectedView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('userlogin/', LoginView.as_view(), name='userlogin'),
    path('protected/', ProtectedView.as_view(), name='protected'),
]
