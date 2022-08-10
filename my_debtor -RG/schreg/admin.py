from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.SchoolProfile)
admin.site.register(models.StaffInfo)
admin.site.register(models.DmaAdmin)

