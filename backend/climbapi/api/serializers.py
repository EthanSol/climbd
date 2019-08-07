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
    def __init__(self, *args, **kwargs):
        self.comments  = serializers.PrimaryKeyRelatedField(many=True, queryset=Comment.objects.filter(route=self.fields['route']))
        super(RouteSerializer, self).__init__(*args, **kwargs)

    class Meta:
        model = Route
        fields = '__all__'