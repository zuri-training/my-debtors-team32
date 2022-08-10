from django.urls import path
from django.views.generic import TemplateView




app_name = 'schreg'

urlpatterns = [
    path('', TemplateView.as_view(template_name="schreg/index.html")),
]