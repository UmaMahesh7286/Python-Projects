from django.db import models

# Create your models here.



class Flight(models.Model):
  flightId=models.AutoField(primary_key=True)
  flightNumber=models.CharField(max_length=40)
  seatingCapacity=models.IntegerField()
  status=models.CharField(max_length=40)

  def __str__(self) -> str:
       return f"Schedules is {self.flightNumber,self.seatingCapacity}"


class Airport(models.Model):
    aiportId=models.AutoField(primary_key=True)
    airportName=models.CharField(max_length=40)
    city=models.CharField(max_length=40)

    def __str__(self) -> str:
       return f"Schedules is {self.airportName,self.city}"


class Schedules(models.Model):
    scheduleId	=models.AutoField(primary_key=True)
    sourceAirport=models.ForeignKey(to=Flight,on_delete=models.DO_NOTHING,related_name="source")	
    destinationAirport	=models.ForeignKey(to=Flight,on_delete=models.DO_NOTHING,related_name="destination")
    arrivalTime	=models.DateTimeField()
    depatureTime=models.DateTimeField()
    availableSeats=models.IntegerField()
    basePrice=models.IntegerField()
    flightIdref=models.ForeignKey(to=Flight,on_delete=models.DO_NOTHING)

    def __str__(self) -> str:
       return f"Schedules is {self.sourceAirport,self.sourceAirport}"
