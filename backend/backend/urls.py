from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                    
from Indra import views                            

router = routers.DefaultRouter()                      
router.register(r'report', views.ReportView, 'todo')     

urlpatterns = [
	path('', views.home, name='home-page'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]