from django.contrib import admin
from django.urls import path,include
from loginapp.views import *

urlpatterns = [
    path('saveairport/', saveairport ,name='saveairport'),
    path('saveflight/', saveflight ,name='saveflight'),
    path('getairport/', getairport ,name='getairport'),
    path('getflight/', getflight ,name='getflight'),
    path('saveschedules/', saveschedules ,name='saveschedules'),
    path('getschedules/', getschedules ,name='getschedules'),
]