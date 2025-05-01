from rest_framework import generics
from .models import SiteSetup, SocialMidia, Technologies
from .serializers import (
    SiteSetupSerialize, SocialMidiaSerialize, TechnologiesSerializer)


class SiteSetupListView(generics.ListAPIView):
    queryset = SiteSetup.objects.all()
    serializer_class = SiteSetupSerialize


class SocialMidiaListView(generics.ListAPIView):
    queryset = SocialMidia.objects.all()
    serializer_class = SocialMidiaSerialize


class TechnologyListView(generics.ListAPIView):
    queryset = Technologies.objects.all()
    serializer_class = TechnologiesSerializer
