from django.contrib import admin
from .models import Reports
# Register your models here.
class ReportAdmin(admin.ModelAdmin):
	list_display = ('latitude', 'longitude', 'timestamp', 'reporttype')

admin.site.register(Reports, ReportAdmin)
