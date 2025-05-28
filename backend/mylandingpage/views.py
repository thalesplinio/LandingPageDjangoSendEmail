from rest_framework import generics
from .models import SiteSetup, SocialMidia, Technologies, Projects, Contact
from .serializers import (
    SiteSetupSerialize, SocialMidiaSerialize, TechnologiesSerializer,
    ProjectsSerializer, ContactSerializer
)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(["GET"])
def get_site_setup(request):
    site_setup = SiteSetup.objects.all()
    serialier = SiteSetupSerialize(site_setup, many=True)
    return Response(serialier.data, status=status.HTTP_200_OK)


class SocialMidiaListView(generics.ListAPIView):
    queryset = SocialMidia.objects.all()
    serializer_class = SocialMidiaSerialize


class TechnologyListView(generics.ListAPIView):
    queryset = Technologies.objects.all()
    serializer_class = TechnologiesSerializer


class ProjectListView(generics.ListAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serialize):
        contact = serialize.save()

        print(contact.name)
        print(contact.email)
        print(contact.message)
