from rest_framework import serializers
from .models import Route, Profile, Comment

class CommentSerializer(serializers.Serializer):
    poster = serializers.SerializerMethodField()

    def get_poster(self, obj):
        return obj.poster.user.username
    
    class Meta:
        model = Comment
        fields = ['poster', 'text', 'rating']