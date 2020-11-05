from django.contrib import admin
from .models import Reports
# Register your models here.
class ReportAdmin(admin.ModelAdmin):
	list_display = ('obstime', 'category', 'description', 'description_id', 'location', 'obsval')

admin.site.register(Reports, ReportAdmin)
