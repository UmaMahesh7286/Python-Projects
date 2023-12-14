from django.db import models

# Create your models here.
class user(models.Model):
    user_name=models.CharField(max_length=200)
    password=models.CharField(max_length=200)

class Page(models.Model):
     user=models.CharField(max_length=200)
     page_name=models.CharField(max_length=200)