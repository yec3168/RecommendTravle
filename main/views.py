import base64
import random
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import datetime, os
# Create your views here.


def test(request):
    return HttpResponse(datetime.datetime.now())

# def test_image(request):
#     image_path = os.path.join(settings.STATICFILES_DIRS[0], 'test', 'test_image.jpg')
#     try:
#         with open(image_path, 'rb') as f:
#             return HttpResponse(f.read(), content_type='image/jpeg')  # Content-Type은 이미지 형식에 따라 변경
#     except FileNotFoundError:
#         return HttpResponse('Image not found', status=404)
    
def test_image(request):
    image_path = os.path.join(settings.STATICFILES_DIRS[0], '계곡')
    supported_extensions = ('.jpg', '.jpeg', '.png', '.gif')
    
    all_images = [os.path.join(image_path, file) for file in os.listdir(image_path) if file.endswith(supported_extensions)]
    selected_images = random.sample(all_images, min(4, len(all_images)))

    image_for_send = []

    for image in selected_images:
        with open(image, "rb") as img:
            image_for_send.append(base64.b64encode(img.read()).decode('utf-8'))

    return JsonResponse({'images' : image_for_send})
    