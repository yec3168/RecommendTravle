from django.db import models

# Create your models here.

class Valley(models.Model):
    title = models.CharField(max_length=200)
    image_path = models.CharField(max_length=500)
    
class Mountain(models.Model):
    title = models.CharField(max_length=200)
    image_path = models.CharField(max_length=500)
    
class Sea(models.Model):
    title = models.CharField(max_length=200)
    image_path = models.CharField(max_length=500)
    
class Camping(models.Model):
    title = models.CharField(max_length=200)
    image_path = models.CharField(max_length=500)