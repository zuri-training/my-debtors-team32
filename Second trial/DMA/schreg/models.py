from django.db import models
from django import forms
from django.contrib.auth.models import User


# Create your models here.

class SchoolProfile(models.Model):
    #class Types(models.TextChoices):
        #PRIVATE = "PRIVATE", "Private",
        #PUBLIC = "PUBLIC", "Public",

    class Categories(models.TextChoices):
        CRECHE = "CRECHE", "Creche",
        NURSERY = "NURSERY", "Nursery",
        PRIMARY = "PRIMARY", "Primary",
        SECONDARY = "SECONDARY", "Secondary",
        VOCATIONAL = "VOCATIONAL", "Vocational",
        TECHNICAL = "TECHNICAL", "Technical",
    

    school_name = models.CharField(max_length=100)
    school_address = models.CharField(max_length=300)
    school_Type = models.CharField(max_length=10, null=True, help_text = "Private or Public")
    school_Category = models.CharField(max_length=10, choices=Categories.choices, default="CRECHE")
    school_Proprietor = models.CharField(max_length=50, help_text = "If 'Public', fill in 'Federal owned' or 'State owned'. ")
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    LGA = models.CharField(max_length=15)
    state = models.CharField(max_length=10)
    file_field = models.FileField(help_text = 'Upload the "Certificate of Registration" of the School here.')
  

    #type = models.CharField(max_length=10, choices=Types.choices, default="PRIVATE")

    #school_Category = models.CharField(max_length=10, choices=Categories.choices, default="CRECHE")
    




class StaffInfo(models.Model):

    class Role(models.TextChoices):
        PROPRIETOR = "PROPRIETOR", "Proprietor",
        PRINCIPAL = "PRINICIPAL", "Principal",
        BURSAR = "BURSAR", "Bursar",
        #ADMIN = "ADMIN", "Admin",

    school_name = models.OneToOneField(SchoolProfile, on_delete=models.PROTECT, primary_key=True)
    staff_role = models.CharField(max_length=10, choices=Role.choices, default='Proprietor')
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    staff_email = models.EmailField()
    staff_phone_number = models.CharField(max_length=15)


    def save(self):  
        pass

    def __str__(self):
        return self.school_name