from django.db import models

# Create your models here.


class Employee(models.Model):
    empName = models.CharField(max_length=30)
    designation = models.CharField(max_length=30,null="true")
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class UserLog(models.Model):
     Date = models.CharField(max_length=30)
     employeeId =models.IntegerField(default=0)
     loginTime = models.CharField(max_length=30)
     logoutTime = models.CharField(max_length=30)
     sessionLength= models.IntegerField(default=0)
     employee =models.ForeignKey(Employee,on_delete=models.CASCADE)

