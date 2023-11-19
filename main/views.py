from django.shortcuts import render
from django.http import HttpResponse
import datetime
# Create your views here.


def test(request):
    return HttpResponse(datetime.datetime.now())