from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os, datetime

from getImage.models import Valley



# Create your views here.
def showImage(request):
    # static/
    IMAGE_PATH = os.path.join(settings.STATICFILES_DIRS[0], "image" , "test_image.jpg")
    print(IMAGE_PATH)
    try:
        with open(IMAGE_PATH, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpeg')  # Content-Type은 이미지 형식에 따라 변경
    except FileNotFoundError:
        return HttpResponse(IMAGE_PATH, status=404)


def imageView(request):
    images = Valley.objects.all()

    return render(request, 'imageView.html',{'images':images})