from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Records(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    name_of_student = models.CharField(max_length=50)
    name_of_parent = models.CharField(max_length=50)
    email = models.EmailField()
    school_owed = models.CharField(max_length=250)
    amount_owed = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name_of_student
    