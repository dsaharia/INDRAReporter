# from django.db import models
from django.contrib.gis.db import models
# Create your models here.
class Reports(models.Model):
    obstime = models.DateTimeField(auto_now_add=True, null=True)
    category = models.CharField(max_length=15, null=True)
    description = models.CharField(max_length=30, null=True)
    description_id = models.CharField(max_length=20, null=True)
    location = models.PointField(null=True)
    obsval = models.FloatField(null=True)
    
    def __str__(self):
        return self.category