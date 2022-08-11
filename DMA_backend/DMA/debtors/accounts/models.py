from django.db import models

# To enable extending the default django custom user model
# To add extra fields
# import AbstractUser

from django.contrib.auth.models import AbstractUser
from debtors import settings

from .managers import UsersManager


# Create your models here.
# Extending our user models with the use of AbstractUser

class Users(AbstractUser):
    # change default login from username to email
    username=None
    first_name=None
    last_name=None
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []

    # set the Usermanager to model
    objects= UsersManager() 
    # create extrafields general to all users

    email = models.CharField('Email Adress', max_length=60, unique=True)
    full_name = models.CharField('Full name', max_length=200, help_text="Enter your surname, middle name and lastname ")
    last_login= models.DateTimeField('Last Login', auto_now=True)
    date_joined= models.DateTimeField('Date Joined', auto_now_add=True)
    schl_name= models.CharField('School Name ' , max_length=200, help_text='Enter the school name', blank=True, null=True)
    phn_no = models.CharField( 'Phone Number', max_length=100)
# This choice field is to enable the users assume only one role(i.e to prevent an already registered user is_student from also registering as a user is_pricipal just to view certain infos).
    
    is_client= models.BooleanField('As Client', default=False)
    is_parent= models.BooleanField('As Parent', default=False)
    is_student= models.BooleanField('As Student', default=False)

    #USER_TYPE_CHOICES= (
     #   (1, 'client'),
      #  (2, 'parent'),
       #
        #return f"{self.email}  {self.full_name}"

    class Meta:
        # change default ordering from username to email
        ordering= ['email']
        verbose_name = 'Users Detail'

# not sure abt this line of code below
class Schools(models.Model):
    name= models.CharField('Name of schools', max_length=300)

class Client(models.Model):
    # information relevant to only the school user(i,e The Client)
    # create more fields for the Client model
    user= models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    Head_master= models.CharField('School Principal', max_length=30, help_text='Enter the name of your school principal')
    registerer= models.CharField('school bursar', max_length=30, help_text= 'Enter the name of your school bursar')
    # A Proprietor can have more than one school and a school can have only one proprietor
    #create Relationship
    School_name = models.ForeignKey(Schools, max_length=400, on_delete=models.CASCADE, null=True)
    
    Ownership_choice= (
    ('pu', 'Public'),
    ('pr', 'Private'),
    ('ot', 'others'),
    )

    School_Ownership= models.CharField('Ownership', max_length=2, choices=Ownership_choice, default='ot')

    Type= (
        ('C', 'Creche'),
        ('N', 'Nursery'),
        ('P', 'Primary'),
        ('S', 'Secondary'),
        ('T', 'Tertiary'),
        ('O', 'Others')
    )

    School_type= models.CharField('Level of school', max_length=1, choices=Type, default='o')
    abt_school = models.TextField('School history', max_length=1000, help_text='Tell us more about your school')
    address= models.CharField('School Address', max_length=200)

    def __str__(self):
        return self.Head_master

   # not sure how to go about this yet. saw a video on installing pillow just to use this field_type 
   # need to download the package that supports the image field pip install pillow or look at cloudify
    #Documents= models.ImageField(max_length=255, upload_to=, default= )


class Parent(models.Model):
    user= models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    stud_name= models.CharField('Name of ward', max_length=50 )
    
    def __str__(self):
        return self. stud_name
    pass

class Student(models.Model):
    user= models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    parent_name= models.CharField('Name of Parent', max_length=50)

    def __str__(self):
        return f"Guardian Name: {self.parent_name}"
    

#class Principal(models.Model):
    #user= models.OneToOneField(Users, on_delete=models.CASCADE, primary_key=True)
    #name= models.CharField('Principal', max_length=300, help_text= 'Enter fullname: surname, middlename & lastname', unique=True)

# Not sure abt this also
#class SchoolDefaulter(models.Model):
#    name= models.CharField('Name of Defaulter', max_length=50)

#class Bursar(models.Model):
 #   user= models.OneToOneField(Users, on_delete=models.CASCADE, primary_key=True)
    #name= models.CharField('Bursar', max_length=300, help_text="Enter fullname: surname, middle name and lastname", unique=True)
  #  num_of_stud= models.CharField('Total Number of students', max_length=20)
   # num_of_defaulters= models.CharField('Number of defaulters', max_length=20)
    #Amt= models.CharField('Owing Amount', max_length=200)
    #Parent_name= models.CharField('Parents Name',max_length=200, help_text= ' Enter defaulters parent name' )

    # This bursar can have more than one defaulter
    # create relationship
    # not sure about this i think the bursar is to be provided a debtor form to fill
    #Defaulter_name= models.ForeignKey(SchoolDefaulter, on_delete=models.CASCADE)

    # is this person still a student of the school
    # create student_status
    #STATUS= (
     #   ('c', 'Current'),
      #  ('f', "former"),
    #)

    #student_status= models.CharField(max_length=1, help_text='Enter students status , Current: stiil a student of the school, Former: otherwise', choices=STATUS)
"""

class Owner(models.Model):
    # This model stores info about the school owner
    surname= models.CharField(max_length=200 )
    middle_name= models.CharField(max_length=100)
    last_name= models.CharField(max_lenght=100, )
    email= models.EmailField()
    phone_num= models.CharField('Phone Number', max_length=100)

class Principal(models.Model):
    name= models.CharField(max_length=100)
    email= models.EmailField()

class Bursar(models.Model):
    name= models.CharField(max_length=100)
    email=models.EmailField()

class Client(models.Model):
    # created the model Client which represents the school 
    Name= models.CharField( max_length=200, help_text='Enter the name of the school')
    # foreignkey used because the Client which is the school can only have one owner , but the owner can have multiple schools.
    School_owner= models.ForeignKey(Owner, on_delete=models.CASCADE default=True)
    about_school= models.TextField(max_length=1000, help_text='Give us more information about your school')
    school_LGA= models.CharField('Schools LGA', max_lenght=100)
    head_teacher= models.OneToOneField(Principal, max_length=100, on_delete=models.SET_NULL, null=True)
    School_registerer= models.OneToOneField('Bursar', max_length=100, 
    on_delete=models.SET_NULL, null=True)

"""

"""

# removed this because i have more than 3 usertypes

# the booleanfield enables identifying if the user is_student or otherwise
    is_admin= models.BooleanField('As Admin', default=False)
    # is_client is the school in whom we are making this platform for
    is_client= models.BooleanField('As Client', default=False)
    is_pricipal= models.BooleanField(' As Principal ', default=False)
    is_bursar= models.BooleanField('As Bursar', default=False)
    is_parent= models.BooleanField('As Parent', default=False)
    is_student= models.BooleanField('As Student', default=False)

"""