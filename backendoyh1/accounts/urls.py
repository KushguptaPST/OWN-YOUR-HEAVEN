from django.urls import path
from .views import SignupView, LoginView, ProtectedView, HotelList

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('userlogin/', LoginView.as_view(), name='userlogin'),
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('hotels/', HotelList.as_view(), name='hotels'),
]
