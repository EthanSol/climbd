from django.shortcuts import render
from django.views import View
from django.db.models import Sum
from .serializers import ListRouteSerializer, DetailRouteSerializer, ProfileSerializer, LeaderboardSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, generics
from .models import Route, Profile
import copy

class RouteList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = ListRouteSerializer

    def perform_create(self, serializer):
        serializer.save(setter=self.request.user.profile)
    
    def get_queryset(self):
        queryset = Route.objects.all()
        if len(self.request.query_params) > 0:
            queryset = queryset.filter(**self.request.query_params.dict())
        return queryset

class RouteDetail(generics.RetrieveUpdateDestroyAPIView):
    # create a permissions class that checks if a user is a setter, otherwise read only
    queryset = Route.objects.all()
    serializer_class = DetailRouteSerializer

# class ProfileDetail(generics.RetrieveUpdateAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer

#     def patch(self, request, pk):
#         p = Profile.objects.get(pk=pk)
#         ps = ProfileSerializer(p)
#         data = copy.deepcopy(ps.data)

#         if 'completed' in request.data:
#             r = Route.objects.get(pk=request.data['completed'])
#             rs = ListRouteSerializer(r)
#             data['completed'].append(rs.data)
#         elif 'projects' in request.data:
#             r = Route.objects.get(pk=request.data['projects'])
#             rs = ListRouteSerializer(r)
#             data['projects'].append(rs.data)
#         else:
#             return Response(status=400)
        
#         serializer = ProfileSerializer(p, data=data, partial=True)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(data=request.data, status=201)
#         else:
#             return Response(status=400)

class ProfileDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, pk=None):
        if pk is None:
            return Response(ProfileSerializer(Profile.objects.get(user=self.request.user)).data)
        else:
            return Response(ProfileSerializer(Profile.objects.get(pk=pk)).data)

    def patch(self, request):
        p = Profile.objects.get(user=self.request.user)
        if 'completed' in request.data:
            r = Route.objects.get(pk=request.data['completed'])
            p.completed.add(r)
            p.save()
            return Response(data=request.data, status=201)
        elif 'projects' in request.data:
            r = Route.objects.get(pk=request.data['projects'])
            p.completed.add(r)
            p.save()
            return Response(data=request.data, status=201)
        return Response(status=400)

class LeaderboardView(generics.ListAPIView):
    serializer_class = LeaderboardSerializer
    queryset = Profile.objects.annotate(Sum('completed__grade')).order_by('completed__grade__sum').reverse()