from django.shortcuts import redirect, render
# create three class based view
# Use djangos createview func
from django.views.generic import CreateView

from .models import Users
from .forms import ClientSignupForm, ParentSignupForm, StudentSignupForm

from django.contrib.auth.forms import AuthenticationForm

# Create your views here.

def Index(request):
    return render(request, 'index.html')

def Register(request):
    return render(request, 'register.html')

# createview displays a form for creating and saving an object
##if no object created, it returns NONE
class ClientRegister(CreateView):
    model = Users
    form_class = ClientSignupForm
    template_name = 'clientregister.html'
    # To redirect tne user after registrin
    # create validate method
    def validate(self, form):
        #delete just checkin
        # save form after registerin
        user= form.save()
        login(self.request, user)
        return redirect('index.html')


class ParentRegister(CreateView):
    model = Users
    form_class = ParentSignupForm
    template_name = 'parentregister.html'

class StudentRegister(CreateView):
    model = Users
    form_class = StudentSignupForm
    template_name = 'studentregister.html'

# Authenticatn of users using the built in django authentication form
# This form 
def login_request(request):
    return render(request,'login.html', context={'login_form': AuthenticationForm()})