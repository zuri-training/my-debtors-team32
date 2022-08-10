from rest_framework import serializers
from schreg.models import SchoolProfile, StaffInfo, DmaAdmin


class SchoolProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolProfile
        fields = '__all__'
        
class StaffInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffInfo
        fields = '__all__'


class DmaAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = DmaAdmin
        fields = '__all__'