from django.contrib.auth.base_user import BaseUserManager



class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):

        """
        Create and save a User with the email and password
        """

        if not email:
            raise ValueError("Email is a required field to signup.")

            email = self.normalize_email(email)
            user = self.models(email=email, **extra_fields)
            user.set_password(password)
            user.save()
            return user




    def create_superuser(self, email, password, **extra_fields):
        """
        Create Superuser with email and password
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get ('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True. '))
        return self.create_user(email, password, **extra_fields)




