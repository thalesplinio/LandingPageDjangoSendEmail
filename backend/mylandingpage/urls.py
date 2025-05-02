from django.urls import path
from .views import (
    SiteSetupListView, SocialMidiaListView, TechnologyListView,
    ProjectListView, ContactCreateView
)


urlpatterns = [
    path('site_setup/', SiteSetupListView.as_view(), name="site_setup"),
    path('social_midia/', SocialMidiaListView.as_view(), name="social_midia"),
    path('technology/', TechnologyListView.as_view(), name="technology"),
    path('projects/', ProjectListView.as_view(), name="projects"),
    path('contact/', ContactCreateView.as_view(), name="create_contact"),
]
