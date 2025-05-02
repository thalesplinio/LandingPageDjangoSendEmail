from rest_framework import generics
from .models import SiteSetup, SocialMidia, Technologies, Projects, Contact
from .serializers import (
    SiteSetupSerialize, SocialMidiaSerialize, TechnologiesSerializer,
    ProjectsSerializer, ContactSerializer
)


class SiteSetupListView(generics.ListAPIView):
    queryset = SiteSetup.objects.all()
    serializer_class = SiteSetupSerialize


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
