from rest_framework import generics
from schreg.models import SchoolProfile, StaffInfo, DmaAdmin
from .serializers import SchoolProfileSerializer, StaffInfoSerializer, DmaAdminSerializer
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS, DjangoModelPermissions

# Create your views here.

class SchoolProfileUserWritePermission(BasePermission):
    message = 'Editing school profile is restricted to the Proprietor only.'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        return obj.proprietor == request.user


class StaffInfoUserWritePermission(BasePermission):
    message = 'Editing school profile is restricted to the Proprietor only.'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        return obj.proprietor == request.user


class SchoolProfileList(generics.ListCreateAPIView, SchoolProfileUserWritePermission):
    permission_classes = [DjangoModelPermissions]
    queryset = SchoolProfile.objects.all()
    serializer_class = SchoolProfileSerializer
   

class SchoolProfileDetail(generics.RetrieveUpdateDestroyAPIView, SchoolProfileUserWritePermission):
    permission_classes = [DjangoModelPermissions]
    queryset = SchoolProfile.objects.all()
    serializer_class = SchoolProfileSerializer
    


class StaffInfoList(generics.ListCreateAPIView, StaffInfoUserWritePermission):
    queryset = StaffInfo.objects.all()
    serializer_class = StaffInfoSerializer()
    

class StaffInfoDetail(generics.RetrieveUpdateDestroyAPIView, StaffInfoUserWritePermission):
    queryset = StaffInfo.objects.all()
    serializer_class = StaffInfoSerializer()
    

class DmaAdminList(generics.ListCreateAPIView):
    queryset = DmaAdmin.objects.all()
    serializer_class = DmaAdminSerializer()
    


class DmaAdminDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DmaAdmin.objects.all()
    serializer_class = DmaAdminSerializer()
    

