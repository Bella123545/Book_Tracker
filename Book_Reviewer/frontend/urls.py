from django.urls import path
from .views import main
from .views import index
urlpatterns = [
    path("",index),
]