from rest_framework import serializers
from .models import Route, Profile, Comment

class UsernameSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')

    class Meta:
        model = Profile
        fields = ['username']

class CommentSerializer(serializers.ModelSerializer):
    poster = UsernameSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
    
class ListRouteSerializer(serializers.ModelSerializer):
    setter = UsernameSerializer(read_only=True)
    class Meta:
        model = Route
        fields = ['id', 'name', 'color', 'date', 'grade','setter', 'discipline']
        depth = 2

class DetailRouteSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    setter = UsernameSerializer(read_only=True)
    completed_users = UsernameSerializer(many=True, read_only=True)

    class Meta:
        model = Route
        fields = ['id', 'name', 'color', 'date', 'grade', 'setter', 'xloc', 'yloc', 'discipline', 'description', 'comments', 'completed_users']
        depth = 2

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')
    completed = ListRouteSerializer(many=True)
    projects = ListRouteSerializer(many=True)

    class Meta:
        model = Profile
        fields = ['user', 'completed', 'projects']
        depth = 2

    # def update(self, instance, validated_data):
    #     completed = validated_data.pop('completed', instance.completed)
    #     projects = validated_data.pop('projects', instance.projects)
    #     instance.save()
    #     # try:
    #     #     instance.completed += validated_data.get('completed', instance.completed)
    #     #     instance.save()
    #     # except:
    #     #     instance.projects += validated_data.get('projects', instance.projects)
    #     #     instance.save()
    #     return instance

class LeaderboardSerializer(serializers.ModelSerializer):
    score = serializers.FloatField(source='completed__grade__sum')
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Profile
        fields = ['user', 'score']