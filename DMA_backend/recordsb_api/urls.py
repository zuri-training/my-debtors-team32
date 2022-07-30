from django.urls import path
from .views import RecordsList, RecordsDetail

app_name = 'recordsb_api'

urlpatterns = [
    path('<int:pk>/', RecordsDetail.as_view(), name='detailcreate'),
    path('', RecordsList.as_view(), name='listcreate'),
]
