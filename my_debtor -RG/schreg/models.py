from django.db import models
from django import forms
from django.contrib.auth.models import User

# Create your models here.


class SchoolProfile(models.Model):

    #class SchoolProfileObjects(models.Manager):
        #def get_queryset(self):
            #return super().get_queryset().filter(school_name='school_name')

    school_name = models.CharField(max_length=100)
    school_category= models.CharField(max_length=10, null=True, help_text = "Private or Public")
    description = models.CharField(max_length=500)
    school_address = models.CharField(max_length=300)
    proprietor_name = models.CharField(max_length=100, help_text = "Surname first", null=True)
    contact_number = models.CharField(max_length=15)
    email = models.EmailField()
    file_field = models.FileField()

    #objects =  models.Manager()
    #schoolprofileobjects = SchoolProfileObjects()


class StaffInfo(models.Model):

    #class StaffInfoObjects(models.Manager):
        #def get_queryset(self):
            #return super().get_queryset().filter(principal_name='principal_name')

    proprietor_name = models.CharField(max_length=100, help_text = "Surname first")
    proprietor_email = models.EmailField(null=True)
    proprietor_phone_number = models.CharField(max_length=15, null=True)

    principal_name = models.CharField(max_length=100, help_text = "Surname first")
    principal_email = models.EmailField(null=True)
    principal_phone_number = models.CharField(max_length=15, null=True)

    bursar_name = models.CharField(max_length=100, help_text = "Surname first")
    bursar_email = models.EmailField(null=True)
    bursar_phone_number = models.CharField(max_length=15, null=True)

    #objects =  models.Manager()
    #staffinfoobjects = StaffInfoObjects()



class DmaAdmin(models.Model):

    #class DmaAdminObjects(models.Manager):
        #def get_queryset(self):
            #return super().get_queryset().filter(admin_name='admin_name')

    admin_name = models.CharField(max_length=100, help_text = "Surname first")
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)

    #objects =  models.Manager()
    #dmaadminobjects = DmaAdminObjects()


class Meta:
    ordering = ('-school_name ',)


    def __str__(self):
        return self.school_name