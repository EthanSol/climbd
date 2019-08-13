from rest_framework import serializers
from .models import Route, Profile, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
    

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class RouteSerializer(serializers.ModelSerializer):
    # comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Route
        fields = ['name', 'color', 'date', 'setter', 'xloc', 'yloc', 'discipline', 'description', 'comments']
        depth = 2