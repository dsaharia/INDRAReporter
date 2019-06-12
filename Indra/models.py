from django.db import models

# Create your models here.
class Reports(models.Model):
	latitude = models.FloatField()
	longitude = models.FloatField()
	timestamp = models.IntegerField()
	report_type = models.TextField()