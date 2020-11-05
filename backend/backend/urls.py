from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers                    
from Indra import views                            

# router = routers.DefaultRouter()                      
# router.register(r'report', views.ReportView, 'todo')     

urlpatterns = [
	path('', views.home, name='home-page'),
    path('admin/', admin.site.urls),
    path('api/', views.api_view, name='api-view'),
    path('api/add/', views.add_data, name='add-data'),
    path('api/query/', views.query_data, name="query-data"),
]