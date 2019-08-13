from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    completed = models.ManyToManyField('Route', related_name='completed_users', blank=True)
    projects = models.ManyToManyField('Route', related_name='project_users', blank=True)
    # TODO add groups! not necessarily here (probably not here)

class Route(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=10)
    date = models.DateTimeField(auto_now_add=True)
    setter = models.ForeignKey('Profile', on_delete=models.PROTECT, blank=True)
    xloc = models.IntegerField(blank=True, null=True)
    yloc = models.IntegerField(blank=True, null=True)
    discipline = models.CharField(max_length=10)
    description = models.CharField(max_length=80, blank=True, default='')

class Comment(models.Model):
    poster = models.ForeignKey('Profile', on_delete=models.PROTECT)
    route = models.ForeignKey('Route', related_name='comments', on_delete=models.CASCADE)
    text = models.CharField(max_length=140)
    rating = models.IntegerField(null=True, blank=True)