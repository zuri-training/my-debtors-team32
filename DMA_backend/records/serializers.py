from rest_framework import serializers
from .models import Records, RegistrationClass
from django.contrib.auth import get_user_model

class RecordSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'author', 'name_of_student', 'email', 'school_owed', 'amount_owed', 'status', 'created_at')
        model = Records


class RegistrationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = RegistrationClass
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)