from django.urls import path
from .views import SchoolProfileDetail, SchoolProfileList, StaffInfoDetail, StaffInfoList, DmaAdminDetail, DmaAdminList



app_name = 'schreg_api'

urlpatterns = [
    path('<int:pk>/', SchoolProfileDetail.as_view(), name='schooldetail_view'),
    path('', SchoolProfileList.as_view(), name='schoollist_view'),
    path('staff/<int:pk>/', StaffInfoDetail.as_view(), name='staffdetail_view'),
    path('staff/', StaffInfoList.as_view(), name='stafflist_view'),
    path('dmaadmin/<int:pk>/', DmaAdminDetail.as_view(), name='dmaadmindetail_view'),
    path('dmaadmin/', DmaAdminList.as_view(), name='dmaadminlist_view'),
]