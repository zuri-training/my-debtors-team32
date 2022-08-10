from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse, reverse_lazy
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib import messages
from django.contrib.auth.forms import PasswordChangeForm
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView
from .forms import SchRegForm, StaffInfoForm
from .models import SchoolProfile, StaffInfo


# Create your views here.

#Create veiw for homepage
def homepage(request):
	return render(request, 'home.html')

#Create views for School registration form

def register1(request):
	initial={'pg1': request.session.get('pg1', None)}
	form = SchRegForm(request.POST or None, initial=initial)
	if request.method == "POST":
		if form.is_valid():
			user=form.save(commit=False)
			request.session['pg1'] = form.cleaned_data['pg1']
			return HttpResonseRedirect(reverse('staff'))
	return render(request, "register-school.html", {'form': form})


#Create view for Proprietor's info form
def register2(request):
	form = StaffInfoForm(request.POST or None)
	if request.method == "POST":
		if form.is_valid():
			staff = form.save(commit=False)
			request.session['pg2'] = form.cleaned_data['pg2']
			return HttpResonseRedirect(reverse('staff2'))
	return render(request, "register-staff.html", {'form': form})


#Create view for Principal's info form
def register3(request):
	form = StaffInfoForm(request.POST or None)
	if request.method == "POST":
		if form.is_valid():
			staff = form.save(commit=False)
			request.session['pg3'] = form.cleaned_data['pg2']
			return HttpResonseRedirect(reverse('staff3'))
	return render(request, "register-staff2.html", {'form': form})


#Create view for Bursar's info form
def register4(request):
	form = StaffInfoForm(request.POST or None)
	if request.method == "POST":
		if form.is_valid():
			staff = form.save(commit=False)
			return HttpResonseRedirect(reverse('homepage'))
	return render(request, "register-staff3.html", {'form': form})


#Create view for login form
def login_user(request):
	if request.method == "POST":
		username = request.POST['username']
		password = request.POST['password']
		if user is not None:
			login(request, user)
			return redirect('homepage')
		else:
			messages.success(request, ("Sorry there was an error logging in. Try again."))
			return redirect("login")
	else:
		return render(request, 'login.html')

#Create view for logout
def logout_user(request):
	#logout(request)
	#messages.success(request, ("You are logged out."))
	return render(request, 'logout.html')



#Create view change password form
def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  
            messages.success(request, 'Your password was successfully updated!')
            return redirect('change_password')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'password_change.html', {'form': form})



#Create ListView, CreateView, DetailView, UpdateView, DeleteView

# class PostListView(ListView):
# 	model = SchoolProfile
# 	model = StaffInfo

# class PostCreateView(CreateView):
# 	model = StaffInfo
# 	fields = "__all__"
    #success_url = reverse_lazy("blog:all")

# class PostDetailView(DetailView):
# 	model = SchoolProfile
# 	model = StaffInfo


# class PostUpdateView(UpdateView):
# 	model = StaffInfo
# 	fields = "__all__"
    #success_url = reverse_lazy("blog:all")


# class PostDeleteView(DeleteView):
# 	model = StaffInfo
# 	fields = "__all__"
    #success_url = reverse_lazy("blog:all")