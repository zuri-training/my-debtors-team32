from django.urls import path
from . import views

urlpatterns=[
  path('index/', views.Index, name='Index'),
  path('register/', views.Register, name='Register'),
  path('client_register/', views.ClientRegister.as_view(), name='client_form'),
  path('parent_register/', views.ClientRegister.as_view(), name='parent_form'),
  path('student_register/', views.StudentRegister.as_view(), name='student_form'),
  path('login/', views.login_request, name='login'),

]