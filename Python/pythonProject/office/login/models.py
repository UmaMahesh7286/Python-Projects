from django.db import models

# Create your models here.

from django.db import models
from datetime import datetime
# Create your models here.


class Employee(models.Model):
    empName = models.CharField(max_length=30)
    designation = models.CharField(max_length=30,null="true")
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.email


class UserLog(models.Model):
     Date = models.DateField(auto_now_add=True)
     employeeId =models.IntegerField(default=0)
     loginTime = models.TimeField()
     logoutTime = models.TimeField()
     # sessionLength= models.IntegerField(default=0)
     employee =models.ForeignKey(Employee,on_delete=models.CASCADE)

     def __str__(self):
         return self.Date