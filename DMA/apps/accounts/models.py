from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth import get_user_model 
from .managers import CustomUserManager
from django.template.defaultfilters import slugify



# Create your models here.

class School(models.Model):
    SCHOOL_TYPE_CHOICES = (
        ("private", "Private"),
        ("public", "Public")
    )

    SCHOOL_CATEGORY_CHOICES =(
        ("creche", "Creche"),
        ("nursery", "Nursery"),
        ("primary", "Primary"),
        ("secondary", "Secondary"),
        ("vocational", "Vocational"),
        ("technical", "Technical")
    )


    school_name = models.CharField(max_length=50)
    school_address = models.CharField(max_length=300)
    school_proprietor = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    LGA = models.CharField(max_length=15)
    state = models.CharField(max_length=10)

    school_type = models.CharField(
        max_length=10, choices=SCHOOL_TYPE_CHOICES, default="private"
    )

    school_caterory = models.CharField(
        max_length=10, choices=SCHOOL_CATEGORY_CHOICES, default="creche"
    )
    def save(self):
        pass

    def __str__(self):
        return self.school_name


class CustomUser(AbstractUser):
  
    USER_TYPES_CHOICES = (
        ("proprietor", "Proprietor"),
        ("principal", "Principal"),
        ("bursar", "Bursar"),
        ("admin", "Admin"),
    )

    school_name = models.ForeignKey(School, on_delete=models.PROTECT)
    last_name = models.CharField(max_length=10)
    first_name = models.CharField(max_length=10)
    other_name = models.CharField(max_length=10, blank=True)
    username = None
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, null=False, blank=False, unique=True)
    slug = models.SlugField(blank=True, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPES_CHOICES)

    object = CustomUserManager()
    

    class Meta:
        ordering = ["email"]
        verbose_name = "User"


    def __str__(self):
        return self.email

    def gen_random_slug(self):
        random_slug = slugify(self.first_name + self.last_name + utils.generate_random_id())
        while CustomUser.objects.filter(slug=random_slug).exists():
            random_slug = slugify(self.first_name + self.last_name + utils.generate_random_id())
            self.slug = self.gen_random_slug()
            return random_slug


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.gen_random_slug()
        
        
        super().save(*args, **kwargs)

