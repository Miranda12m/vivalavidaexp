from django.urls import path, include
from rest_framework import routers
from vivalv import views

router = routers.DefaultRouter()
router.register(r'tours', views.TourView, 'tours')
router.register(r'restaurants', views.RestaurantView, 'restaurants')
router.register(r'coworkings', views.CoworkingView, 'coworkings')
router.register(r'localconsumes', views.LocalConsumeView, 'localconsumes')
router.register(r'hotels', views.HotelsView, 'hotels')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
