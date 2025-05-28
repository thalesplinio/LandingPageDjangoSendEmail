# type: ignore
# flake8: noqa
from django.urls import path
from .views import (health_check, get_site_setup, get_midia_social,
                    get_technologies, get_projects, create_contact)


urlpatterns = [
    path('ping/', health_check, name="ping"),
    path('site_setup/', get_site_setup, name="site_setup"),
    path('social_midia/', get_midia_social, name="social_midia"),
    path('technology/', get_technologies, name="technology"),
    path('projects/', get_projects, name="projects"),
    path('contact/', create_contact, name="create_contact"),
]
