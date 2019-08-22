from django.contrib.auth.models import Group
from rest_framework.permissions import BasePermission

if not Group.objects.filter(name='setters').exists():
    group = Group(name='setters')
    group.save()

if not Group.objects.filter(name='gyms').exists():
    group = Group(name='gyms')
    group.save()

class IsSetterOrReadOnly(BasePermission):
    SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS')
    def has_permission(self, request, view):
        return bool(
            request.method in SAFE_METHODS or
            request.user and
            request.user.is_authenticated and
            (request.user.groups.filter(name='setters').exists() or request.user.groups.filter(name='gyms').exists)
        )

class IsGymAdminOrReadOnly(BasePermission):
    pass