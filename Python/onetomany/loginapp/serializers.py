from rest_framework import serializers
from .models import Flight
from .models import Airport
from .models import Schedules


# class ShedulesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Schedules
#         fields = '__all__'

class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = '__all__'
class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'
class ShedulesSerializer(serializers.ModelSerializer):
     source_airport_data = AirportSerializer()
     destination_airport_data =  AirportSerializer()
     flight_data =FlightSerializer()
     class Meta:
        model = Schedules
        fields ='__all__'
     def create(self, validated_data):
        source_airport_data = validated_data.pop('source_airport')
        destination_airport_data = validated_data.pop('destination_airport')
        flight_data = validated_data.pop('flight')

        source_airport = Airport.objects.create(**source_airport_data)
        destination_airport = Airport.objects.create(**destination_airport_data)
        flight = Flight.objects.create(**flight_data)

        schedule = Schedules.objects.create(
            source_airport=source_airport,
            destination_airport=destination_airport,
            flight=flight,
            **validated_data
        )
        return schedule