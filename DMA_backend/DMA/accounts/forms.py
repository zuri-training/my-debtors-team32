# submitting filled forms
# proceesing received data from user
# import django built-in UserCreationForm
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import  Users

 # To ensure the database safely receives the filled form when submitted 
from django.db import transaction

class ClientSignupForm(UserCreationForm):
    # include extrafield in registration form
    # create fields
    full_name= forms.CharField(required=True)
    email= forms.CharField(required=True)
    School_name= forms.CharField(required=True)
    Head_master= forms.CharField(required=True)
    registerer= forms.CharField(required=True)
    School_ownership= forms.CharField(required=True)
    #School_type= forms.CharField(required=True)
    abt_schl= forms.CharField(required=True)
    address= forms.CharField(required=True)
    #last_login= forms.DateField(required=True)
    #date_joined = forms.DateTimeField(required=True)

    class Meta(UserCreationForm.Meta):
        model= Users
        fields= ('email',)

    # to avoid data error during transaction of registered form
    # Initialize the transaction atomic func
    @transaction.atomic
    def data_save(self):
        # commit=False implies save the form first befor saving in the database.
        user= super().save(commit=False)
        # to identify the user
        user.is_client = True
        '''
        The self.cleaned data method enables users who submits their data via the django forms, the data will first be validated and cleaned which then converts this data into the appropriate type to be passed to a server.
        '''
        user.full_name = self.cleaned_data.get('full_name')
        user.email = self.cleaned_data.get('email')
        user.save()
        Client= Client.objects.create(user=user)
        Client.School_ownership = self.cleaned_data.get('School_ownership')
        Client.save()
        return Client
        

class ParentSignupForm(UserCreationForm):
    # include extrafield in registration form
    # create fields
    '''
    full_name= forms.CharField(required=True)
    School_name= forms.CharField(required=True)
    Head_master= forms.CharField(required=True)
    stud_name = forms.CharField(required=True)
    last_login= forms.CharField(required=True)
    date_joined = forms.CharField(required=True)
    '''

    class Meta(UserCreationForm.Meta):
        model= Users
        fields= ('email',)

    @transaction.atomic
    def data_save(self):
        # commit=False implies save the form first befor saving in the database.
        user= super().save(commit=False)
        # To identify the type of user
        user.parent = True
        '''
        The self.cleaned data method enables users who submits their data via the django forms, the data will first be validated and cleaned which then converts this data into the appropriate type to be passed to a server.
        '''
        user.full_name = self.cleaned_data.get('full_name')
        user.email = self.cleaned_data.get('email')
        user.save()
        Parent= Parent.objects.create(user=user)
        Parent.stud_name = self.cleaned_data.get('School_ownership')
        Parent.save()
        return Parent

class StudentSignupForm(UserCreationForm):
    # include extrafield in registration form
    # create fields
    full_name= forms.CharField(required=True)
    School_name= forms.CharField(required=True)
    Head_master= forms.CharField(required=True)
    parent_name = forms.CharField(required=True)
    last_login= forms.CharField(required=True)
    date_joined = forms.CharField(required=True)

    class Meta(UserCreationForm.Meta):
        model= Users
        fields= ('email',)
        
    @transaction.atomic
    def data_save(self):
        # commit=False implies save the form first befor saving in the database.
        user= super().save(commit=False)
        user.is_student = True
        '''
        The self.cleaned data method enables users who submits their data via the django forms, the data will first be validated and cleaned which then converts this data into the appropriate type to be passed to a server.
        '''
        user.full_name = self.cleaned_data.get('full_name')
        user.email = self.cleaned_data.get('email')
        user.save()
        Student= Student.objects.create(user=user)
        Student.parent_name = self.cleaned_data.get('School_ownership')
        Student.save()
        return Student