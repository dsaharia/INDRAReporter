from rest_framework import serializers
from .models import Reports

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
      model = Reports
      fields = ('id','latitude', 'longitude', 'timestamp', 'reporttype')