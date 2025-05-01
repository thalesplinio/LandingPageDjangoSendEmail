from rest_framework import generics
from .models import SiteSetup
from .serializers import SiteSetupSerialize


class SiteSetupListView(generics.ListAPIView):
    queryset = SiteSetup.objects.all()
    serializer_class = SiteSetupSerialize
