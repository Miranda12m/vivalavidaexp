from rest_framework import serializers
from .models import Tour, Restaurant, Coworking, LocalConsume, Hotels

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class CoworkingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coworking
        fields = '__all__'

class LocalConsumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalConsume
        fields = '__all__'

class HotelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields = '__all__'
        