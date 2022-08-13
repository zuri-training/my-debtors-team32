from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Records(models.Model):
    
    options = (
        ('Abandoned payment', 'Abandoned payment'),
        ('Pending payment', 'Pending payment'),
        ('Completed', 'Completed'),
    )

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    name_of_student = models.CharField(max_length=50)
    name_of_parent = models.CharField(max_length=50)
    email = models.EmailField()
    slug = models.SlugField(max_length=50)
    school_owed = models.CharField(max_length=250)
    amount_owed = models.IntegerField()
    status = models.CharField(max_length=20, choices=options)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return self.name_of_student