from django.db import models

# Create your models here.

class Valley(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    
    def __str__(self):
        return  self.title
    
class Sea(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    

    def __str__(self):
        return  self.title
    
class Mountain(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    
    def __str__(self):
        return  self.title
    
class Camping(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    
    def __str__(self):
        return  self.title
