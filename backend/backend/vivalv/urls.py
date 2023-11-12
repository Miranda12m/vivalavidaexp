from django.urls import path, include
from rest_framework import routers
from vivalv import views

router = routers.DefaultRouter()
router.register(r'tours', views.TourView, 'tours')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
