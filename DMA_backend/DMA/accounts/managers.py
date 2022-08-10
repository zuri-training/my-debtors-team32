
"""
class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):

        '''
        Create and save a User with the email and password
        '''

        if not email:
            raise ValueError("Email is a required field to signup.")

        email= self.normalize_email(email)
        email= email.lower()
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user




    def create_superuser(self, email, password, **extra_fields):
        '''
        Create Superuser with email and password
        '''
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(('Superuser must have is_staff=True.'))
        if extra_fields.get ('is_superuser') is not True:
            raise ValueError(('Superuser must have is_superuser=True. '))
        return self.create_user(email, password, **extra_fields)
"""





from django.contrib.auth.base_user import BaseUserManager

# managers perform creations , retrieve data from the database etc
class UsersManager(BaseUserManager):
    # create user manager
    def create_user(self, email, password, **extra_fields):
        '''
        creates and saves a user;
         Args:
         email (_type_): description
         password (_type_): _description

        '''
        if not email:
            raise ValueError(" Email is a required field")
        # convert email address to lowercase
        # use normaliize_email func
        email= self.normalize_email(email)
        email= email.lower()

        user = self.model(
            # To create a model
            email = email,
            **extra_fields,

        )
        user.set_password(password) # hash password as not to be saved on db as a plain text
        user.save()
        return user

    
    def create_superuser(self, email, password, **extra_fields):
        '''
        create superuser with email and password
        '''
       # set as a superuser
    
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('superuser must have is_staff=True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('superuser must have is_superuser=True')
        return self.create_user(email, password, **extra_fields)
        
        pass