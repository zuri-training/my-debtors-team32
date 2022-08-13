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


class RegistrationClass(models.Model):
    
    option = (
        ('Public School', 'Public School'),
        ('Private School', 'Private School'),
    )

    school_name = models.CharField(max_length= 300, unique=True)
    school_category = models.CharField(max_length=20, choices=option)
    description = models.TextField(blank=True, null=True)
    school_address = models.TextField(blank=True, null=True)
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    user_name = models.CharField(max_length=50)
    email_field = models.EmailField()
    school_cert = models.CharField(max_length=250, blank=True, null=True)
    registeration_cert = models.CharField(max_length=250, blank=True, null=True)
    ministry_approval = models.CharField(max_length=250, blank=True, null=True)
    proprietor_name = models.CharField(max_length=250, blank=True, null=True)
    proprietor_email = models.EmailField(max_length=250, blank=True, null=True)
    proprietor_number = models.CharField(max_length=250, blank=True, null=True)
    principal_name = models.CharField(max_length=250, blank=True, null=True)
    proprietor_email = models.EmailField(blank=True, null=True)
    proprietor_number = models.CharField(max_length=250,blank=True, null=True)
    bursar_name = models.CharField(max_length=250,blank=True, null=True)
    bursar_email = models.EmailField(blank=True, null=True)
    bursar_number = models.CharField(max_length=250,blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.school_name