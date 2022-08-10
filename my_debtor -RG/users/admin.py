from django.contrib import admin
from users.models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.db import models

# Register your models here.
admin.site.register(CustomUser)

class CustomUserAdmin(UserAdmin):
    #add_form = forms.CustomUserCreationForm
    #form = forms.CustomUserChangeForm
    ordering = ["school_name"]
    model = CustomUser
    list_filter = ["school_name",  "last_name", "first_name", "email", "is_staff", "is_active", "is_superuser"]
    list_display = ["school_name",  "last_name", "first_name", "email", "is_staff", "is_active", "is_superuser"]
    search_fields = ['school_name', 'role', 'last_name', 'email']


    fieldsets = (
        (None, {"fields": ('email','last_name', 'first_name', 'password',)}),
        ('Permissions', {"fields": ('is_staff', 'is_active')}),
    )

