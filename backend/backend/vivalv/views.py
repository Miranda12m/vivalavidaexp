from rest_framework import viewsets
from .serializer import TourSerializer
from .models import Tour

# Create your views here.

class TourView(viewsets.ModelViewSet):
    serializer_class = TourSerializer
    queryset = Tour.objects.all()
    