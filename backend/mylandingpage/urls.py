from django.urls import path
from .views import (
    SocialMidiaListView, TechnologyListView,
    ProjectListView, ContactCreateView
)
from .views import (health_check, get_site_setup)


urlpatterns = [
    path('ping/', health_check, name="ping"),
    path('site_setup/', get_site_setup, name="site_setup"),
    # path('site_setup/', SiteSetupListView.as_view(), name="site_setup"),

    path('social_midia/', SocialMidiaListView.as_view(), name="social_midia"),
    path('technology/', TechnologyListView.as_view(), name="technology"),
    path('projects/', ProjectListView.as_view(), name="projects"),
    path('contact/', ContactCreateView.as_view(), name="create_contact"),

]
