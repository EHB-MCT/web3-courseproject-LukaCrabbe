from django.urls import path, include

from . import views

app_name = "home"
urlpatterns = [
    path("", include("django.contrib.auth.urls"), name="home"),
    path("register", views.register, name="register"),
    path("login_after_register", views.login_after_register),
]
