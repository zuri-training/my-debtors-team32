from django.contrib import admin
from . import models


@admin.register(models.Records)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name_of_student', 'id', 'status', 'slug', 'author')
    prepopulated_fields = {'slug': ('name_of_student',), }
