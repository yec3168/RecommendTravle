from django.shortcuts import render
from django.http import HttpResponse
from . import crawling


def getImage(request):
# Create your views here.
    crawling.urllib_request_loop()
    # 문제없이 반응.
    return HttpResponse(200)