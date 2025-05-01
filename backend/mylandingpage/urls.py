from django.urls import path
from .views import SiteSetupListView


urlpatterns = [
    path('site_setup/', SiteSetupListView.as_view(), name="site_setup"),
]
