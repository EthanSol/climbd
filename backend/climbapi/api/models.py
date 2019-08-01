from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    completed = models.ManyToManyField(Route)
    projects = models.ManyToManyField(Route)
    # TODO add groups! not necessarily here (probably not here)

class Route(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=10)
    date = models.DateTimeField(auto_now_add=True)
    setter = models.ForeignKey(Profile, on_delete=models.PROTECT)
    xloc = models.IntegerField()
    yloc = models.IntegerField()
    discipline = models.CharField(max_length=10)
    description = models.CharField(max_length=80, blank=True, default='')

class Comment(models.Model):
    poster = models.ForeignKey(User, on_delete=models.PROTECT)
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    text = models.CharField(max_length=140)
    rating = models.IntegerField(null=True, blank=True)