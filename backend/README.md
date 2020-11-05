# INDRA Reporter
---
- **Full geoJSON support.**

- Database - PostgreSQL with PostGIS extension.
- Deployment - Heroku (Free tier).
- Techstack -
    - Django.
    - Gunicorn - WSGI HTTP server.

- Database schema - 
```json
{
    id: integer,
    obstime: DateTimeField - Timestamp UTC.
    category: CharField - category of the report
    description :CharField - full description of the report
    description_id :CharField - id for the description
    location: PointField - lat, lon.
}
```

## Backend Services
- `GET` all data - Using a `GET` request, query this URL - http://indrareport.herokuapp.com/api/ . It returns a JSON response.
- **Data Query -**
    - `GET` data based on `category` field. Pass the parameter. Returns JSON response of only one category of data specified in the paramater.
        - `category` options - *'Rain', 'Visibility', 'Landslide', 'Storm', 'Ligntning'*.
        - Main URL - http://indrareport.herokuapp.com/api/query/
        - URL with params - http://indrareport.herokuapp.com/api/query/?category=Landslide or http://indrareport.herokuapp.com/api/query/?category=Rain , etc.
    - `GET` data based on `obstime` field - Returns a JSON response of data older than parameter number of hours.
        - `obstime` options - 24 or 6 hours.
        - Main URL - http://indrareport.herokuapp.com/api/query/
        - URL with params - http://indrareport.herokuapp.com/api/query/?time=24

- **Data Entry -**
    - `POST` request to URL - http://indrareport.herokuapp.com/api/add/ . Send the data as JSON request with correct database fields.

## TO-DO -
- [ ] Use the `django-rest-framework` with the PostGIS feature.