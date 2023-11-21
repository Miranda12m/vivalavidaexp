# admin.py
from django.contrib import admin
from .models import Tour, Restaurant, Coworking, LocalConsume, Hotels, Form as Form_Contacto_Clientes

# Register your models here.

admin.site.register(Tour)
admin.site.register(Restaurant)
admin.site.register(Coworking)
admin.site.register(LocalConsume)
admin.site.register(Hotels)
admin.site.register(Form_Contacto_Clientes)