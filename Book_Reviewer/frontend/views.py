from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main(request):
    return HttpResponse("this is from frontend")
def index(request, *ards, **kwargs):
    return render(request, 'frontend/index.html')
