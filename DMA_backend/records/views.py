from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from .models import Records
from .serializers import RecordSerializer, UserSerializer, RegistrationSerializer
from django.contrib.auth import get_user_model
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.



class RecordView(viewsets.ModelViewSet):
    permissions_classes = [IsAuthenticated]
    serializer_class = RecordSerializer

    def get_queryset(self):
        user = self.request.user
        return Records.objects.filter(author=user)

class RecordSearchFilter(viewsets.ReadOnlyModelViewSet):

    queryset = Records.objects.all()
    serializer_class = RecordSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['@name_of_student' , '@email', '@school_owed']

    #?search=

class Registration(viewsets.ModelViewSet):
    queryset = RegistrationClass.objects.all()
    serializer_class = RegistrationSerializer


class SchoolInfo(viewsets.ReadOnlyModelViewSet):
    queryset = RegistrationClass.objects.all()
    serializer_class = RegistrationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['school_name']

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
