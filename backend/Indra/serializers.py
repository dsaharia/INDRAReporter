# from rest_framework import serializers
# from .models import Reports
# from django.core.serializers import serialize

# class ReportSerializer(serializers.ModelSerializer):
#     class Meta:
#       model = Reports
#       fields = ('id', 'category', 'location')

# serialize('geojson', Reports.objects.all(),geometry_field='location', fields=('id',))