from django.contrib import auth
from django.core.checks.messages import ERROR
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User


def register(request):
    return render(request, "authentication/register.html")


def login_after_register(request):
    username = request.POST["username"]
    password = request.POST["password"]
    User.objects.create_user(username, None, password)
    user = authenticate(request, username=username, password=password)
    login(request, user)
    return redirect("/polls")


# Create your views here.
