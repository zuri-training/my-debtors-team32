from django.urls import path
from .views import CustomUserRegistration, BlackListTokenView

app_name ='users'

urlpatterns =[
    path('register/', CustomUserRegistration.as_view(), name="create_user"),
    path('logout/blacklist', BlackListTokenView.as_view(), name='blacklist'),
]