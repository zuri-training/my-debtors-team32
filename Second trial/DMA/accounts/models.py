from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    is_admin = models.BooleanField('Is admin', default=False)
    is_proprietor = models.BooleanField('Is proprietor', default=False)
    is_principal = models.BooleanField('Is principal', default=False)
    is_bursar = models.BooleanField('Is bursar', default=False)