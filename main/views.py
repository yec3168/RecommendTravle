from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import datetime, os
# Create your views here.


def test(request):
    return HttpResponse(datetime.datetime.now())

def test_image(request):
    image_path = os.path.join(settings.STATICFILES_DIRS[0], 'test', 'test_image.jpg')
    try:
        with open(image_path, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpeg')  # Content-Type은 이미지 형식에 따라 변경
    except FileNotFoundError:
        return HttpResponse('Image not found', status=404)