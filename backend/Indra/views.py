from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import ReportSerializer 
from .models import Reports                  

class ReportView(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    queryset = Reports.objects.all()