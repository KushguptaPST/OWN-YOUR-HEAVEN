from rest_framework import serializers

class TaskSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    title = serializers.CharField()
    completed = serializers.BooleanField()



