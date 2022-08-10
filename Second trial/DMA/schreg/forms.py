from django.forms import ModelForm
from django.db import models
from .models import SchoolProfile, StaffInfo


SCHOOL_CHOICES=[
	('CRECHE', 'Creche'),
	('NURSERY', 'Nursery'),
	('PRIMARY', 'Primary'),
	('SECONDARY', 'Secondary'),
	('VOCATIONAL', 'Vocational'),
	('TECHNICAL', 'Technical'),

]


STAFF_ROLE=[
	('PROPRIETOR', 'Proprietor'),
	('PRINCIPAL', 'Principal'),
	('BURSAR', 'Bursar'),
	#('ADMIN', 'Admin')
]

class SchRegForm(ModelForm):
	class Meta:
		model = SchoolProfile
		fields = '__all__'


class StaffInfoForm(ModelForm):
	class Meta:
		model = StaffInfo
		fields = '__all__'


