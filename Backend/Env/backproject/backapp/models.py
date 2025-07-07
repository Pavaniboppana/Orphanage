from django.db import models

# Create your models here.

class Login(models.Model):
    UserName=models.CharField(max_length=500)
    Email=models.CharField(max_length=500)
    Password=models.CharField(max_length=500)
    # Email=models.CharField(max_length=500)

class Signup(models.Model):
    UserName=models.CharField(max_length=500)
    Email=models.CharField(max_length=500)
    Password1=models.CharField(max_length=500)
    Password2=models.CharField(max_length=500)