from rest_framework import viewsets
from .serializer import TourSerializer, RestaurantSerializer, CoworkingSerializer, LocalConsumeSerializer, HotelsSerializer, FormSerializer
from .models import Tour, Restaurant, Coworking, LocalConsume, Hotels, Form

# Create your views here.

class TourView(viewsets.ModelViewSet):
    serializer_class = TourSerializer
    queryset = Tour.objects.all()
    
class RestaurantView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

class CoworkingView(viewsets.ModelViewSet):
    serializer_class = CoworkingSerializer
    queryset = Coworking.objects.all()

class LocalConsumeView(viewsets.ModelViewSet):
    serializer_class = LocalConsumeSerializer
    queryset = LocalConsume.objects.all()

class HotelsView(viewsets.ModelViewSet):
    serializer_class = HotelsSerializer
    queryset = Hotels.objects.all()

class FormView(viewsets.ModelViewSet):
    serializer_class = FormSerializer
    queryset = Form.objects.all()