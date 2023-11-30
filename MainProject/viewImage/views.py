from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os, datetime

from getImage.models import Valley, Sea, Mountain, Camping



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
    Valley_images = Valley.objects.all()
    Sea_images = Sea.objects.all()
    Mountain_images = Mountain.objects.all()
    Camping_images = Camping.objects.all()
    

    return render(request, 'imageView.html',{'Valley_images':Valley_images,
                                             'Sea_images':Sea_images,
                                             'Mountain_images':Mountain_images,
                                             'Camping_images':Camping_images})