from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .serializers import *

@api_view(['POST'])
def inserting(request):
    print(request.data)
    serilizer=StudentSerailizers(data=request.data)
    if serilizer.is_valid():
        serilizer.save()
        return Response(serilizer.data)
    else:
        return Response("not saved")

@api_view(['GET'])
def gettingData(request):
    allData=Student.objects.all()
    serializer=StudentSerailizers(data=allData,many=True)
    serializer.is_valid()
    return Response(serializer.data)    


@api_view(['PUT'])
def upadateStudent(request,id):
    print("this is getting from the url",id)
    student = Student.objects.get(id=id)
    serializer=StudentSerailizers(instance=student,data=request.data)
    serializer.is_valid()
    serializer.save()    

    return Response("ok this function working fine")


@api_view(['DELETE'])
def deleteStudent(request,id):
    student=Student.objects.get(id=id)
    student.delete()


    return Response("ok dleted")