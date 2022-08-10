from django.urls import path 
from . import views
from django.contrib.auth import login, logout

app_name = "schreg"   


urlpatterns = [
    path("home/", views.homepage, name="homepage"),
    path("register-school/", views.register1, name="school"),
    path("register-staff/", views.register2, name="staff"),
    path("register-staff2/", views.register3, name="staff2"),
    path("register-staff3/", views.register4, name="staff3"),
    path('login_user', views.login_user, name="login"),
    path("logout_user", views.logout_user, name="logout"),
    path('change-password/', views.change_password, name='change_password'),




    #path("password_change", views.password_change, name="password_change"),
    #path("password_change_done", views.password_change_done, name="password_change_done")
    #path("reset-password", views.password_reset, name="password_reset"),
    #path("reset-password/done", views.password_reset_done, name="password_reset_done"),
    #path("reset-password/confirm", views.password_reset_confirm, name="password_reset_confirm"),
    #path("thanks-page", views.thankspage, name="thanks"),


]