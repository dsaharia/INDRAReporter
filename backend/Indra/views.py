from django.shortcuts import render
from .models import Reports
from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from django.contrib.gis.geos import Point
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
import json

def home(request):
    return render(request, 'indra/home.html')


@csrf_exempt
def add_data(request):
    """
    This function accepts the POST data in JSON format, creates a POINT object, saves in the DB. In case of Error return with specific message and status code.
    """
    if request.method == "POST":
        received_json = json.loads(request.body.decode("utf-8"))
        # print(received_json)
        lat = received_json.get('lat', None)
        lon = received_json.get('lon', None)
        curr_category = received_json.get('category', None)
        curr_description = received_json.get('description', None)
        curr_description_id = received_json.get('description_id', None)
        curr_obsval = received_json.get('obsval', None)
        # print(lat, lon, type(curr_category), curr_description, curr_description_id)
        if lat == None or lon == None or curr_category == None or curr_description == None or curr_description_id == None:
            # Error condition
            # ---- Note - Status code - 422. For Bad Input given.----
            return JsonResponse(
                {"message": "Bad Input given. Error"},
                status=422
            )

        # Create the Point object and insert into the DB.
        point = Point(float(lat), float(lon))
        print(point)
        data = Reports(
            category=curr_category,
            description=curr_description,
            description_id=curr_description_id,
            location=point,
            obsval=float(curr_obsval),
        )
        data.save()  # DB entry created.
    return JsonResponse({"message": "Report Created"})


def api_view(request):
    """
    This view returns the full DB entry as JSON response.
    """
    json_data = serialize('geojson',
                          Reports.objects.all(),
                          geometry_field='location',
                          fields=('category', 'description', 'description_id', 'obstime', 'obsval')
                          )

    # print(json_data)
    return HttpResponse(json_data, content_type='application/json')


def query_data(request):
    """
    This View returns data based on query paramaters such as based on TIME, CATEGORY etc.
    The parameter value is extracted and data is filtered, which is then returned as a JSON
    response.
    """
    if request.method == "GET":
        keys = list(request.GET.keys())
        print(keys)
        if "category" in keys:
            data = Reports.objects.filter(category=request.GET["category"])

        elif "time" in keys:
            hours_arg = int(request.GET["time"])
            time_threshold = timezone.now() - timezone.timedelta(hours=hours_arg)
            data = Reports.objects.filter(obstime__gte=time_threshold)
            print(f"Filter Threshold: ", time_threshold)
            
        json_result = serialize(
                        'geojson',
                        data,
                        geometry_field='location',
                        fields=('category', 'description', 'description_id', 'obstime', 'obsval')
                    )
    return HttpResponse(json_result, content_type='application/json')
