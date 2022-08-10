from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = None
    email = models.EmailField(unique=True)
    last_name = models.CharField(max_length=150)
    first_name = models.CharField(max_length=150)
    school_name = models.CharField(max_length=200)
    role = models.CharField(max_length=15)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['last_name', 'first_name']

    objects = CustomUserManager()

class Meta:
    ordering = ["school_name"]
    verbose_name = "User"

    def __str__(self):
        return self.email



