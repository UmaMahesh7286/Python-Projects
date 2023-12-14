from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import  ListModelMixin,RetrieveModelMixin,DestroyModelMixin,CreateModelMixin,UpdateModelMixin
from  .models import *
from .serializers import StudentSerializer


class StudentInsertandGettingall(GenericAPIView,CreateModelMixin,ListModelMixin):
     queryset = Student.objects.all()
     serializer_class=StudentSerializer
     def post(self,request):
          return self.create(request)
     def get(self,request):
        return self.list(request)



class upadateAndDeleteAndRetraiveByID(GenericAPIView,UpdateModelMixin,DestroyModelMixin,RetrieveModelMixin):
     queryset=Student.objects.all()
     serializer_class=StudentSerializer
     def put(self,request,**kwargs):
          return self.update(request,**kwargs)
     def delete(self,request,**kwargs):
          return self.destroy(request,**kwargs)
     def get(self,request,**kwargs):
          return self.retrieve(request,**kwargs)
     
     
     