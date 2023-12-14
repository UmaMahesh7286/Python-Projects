from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import AirportSerializer
from .serializers import ShedulesSerializer
from .serializers import FlightSerializer
from rest_framework.response import Response
from .models import *
# Create your views here.

@api_view(['POST'])
def saveairport(request):
     serilizer=AirportSerializer(data=request.data)
     if serilizer.is_valid():
            serilizer.save()
            return Response(serilizer.data)
     else:
            return Response("not saved")
    

@api_view(['GET'])
def getairport(request):
     alldata=Airport.objects.all()
     serilizer=AirportSerializer(data=alldata,many=True)  
     serilizer.is_valid()
     return Response(serilizer.data)
    

@api_view(['POST'])
def saveflight(request):
     serilizer=FlightSerializer(data=request.data)
     if serilizer.is_valid():
            serilizer.save()
            return Response(serilizer.data)
     else:
            return Response("not saved")

@api_view(['GET'])
def getflight(request):
     alldata=Flight.objects.all()
     serilizer=FlightSerializer(data=alldata,many=True)  
     serilizer.is_valid()
     return Response(serilizer.data)

@api_view(['POST'])
def saveschedules(request):
     serilizer=ShedulesSerializer(data=request.data)
     print(serilizer)
     if serilizer.is_valid():
        Schedules.objects.create()
        serilizer.save()
        return Response(serilizer.data)
     else:
        return Response("not saved")

@api_view(['GET'])
def getschedules(request):
     alldata=Schedules.objects.all()
     serilizer=ShedulesSerializer(data=alldata,many=True)  
     serilizer.is_valid()
     return Response(serilizer.data)