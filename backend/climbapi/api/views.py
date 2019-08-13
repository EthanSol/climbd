from django.shortcuts import render
from .serializers import RouteSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, generics
from .models import Route

# Create your views here.
# class RouteList(APIView):
#     """ 
#         List routes, or create a route
#     """
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

#     def get(self, request, format=None):
#         routes = Route.objects.all()
#         serializer = RouteSerializer(routes, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = RouteSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(setter=request.user.profile)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RouteList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

    def perform_create(self, serializer):
        serializer.save(setter=self.request.user.profile)

class RouteDetail(generics.RetrieveUpdateDestroyAPIView):
    # create a permissions class that checks if a user is a setter, otherwise read only
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

