from rest_framework import serializers
from .models import *

class StudentSerailizers(serializers.ModelSerializer):
    class Meta:
        model=Student
        # fields=['id','name']
        fields= '__all__'
