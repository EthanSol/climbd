from django.contrib import admin
from .models import Route, Profile, Comment

# Register your models here.
admin.site.register(Route)
admin.site.register(Profile)
admin.site.register(Comment)