from rest_framework import generics
from .models import SiteSetup, SocialMidia
from .serializers import SiteSetupSerialize, SocialMidiaSerialize


class SiteSetupListView(generics.ListAPIView):
    queryset = SiteSetup.objects.all()
    serializer_class = SiteSetupSerialize


class SocialMidiaListView(generics.ListAPIView):
    queryset = SocialMidia.objects.all()
    serializer_class = SocialMidiaSerialize
