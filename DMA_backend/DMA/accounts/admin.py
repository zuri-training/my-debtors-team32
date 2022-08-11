from django.contrib import admin
from .models import Users,Client, Parent, Student

# Register your models here.
admin.site.register(Users)
admin.site.register(Client)
admin.site.register(Parent)
#admin.site.register(Bursar)
admin.site.register(Student)
#admin.site.register(School)
#admin.site.register(SchoolDefaulter)



"""
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
#from django.contrib.auth import get_user_model 
from .models import Users
# Register your models here.

admin.site.register(Users)


class UserAdmin(UserAdmin):
    model = Users
    list_display = ('email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)
"""