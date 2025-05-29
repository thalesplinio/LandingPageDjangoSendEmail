# type: ignore
# flake8: noqa
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import SiteSetup, SocialMidia, Technologies, Projects
from .serializers import (
    SiteSetupSerialize, SocialMidiaSerialize, TechnologiesSerializer,
    ProjectsSerializer, ContactSerializer
)
from services.send_email.send_email import EnviarEmailSMTP
from threading import Thread


@api_view(["GET"])
def health_check(request):
    return Response(status=status.HTTP_200_OK)


@api_view(["GET"])
def get_site_setup(request):
    site_setup = SiteSetup.objects.all()
    serialier = SiteSetupSerialize(site_setup, many=True)
    return Response(serialier.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_midia_social(request):
    midia_social = SocialMidia.objects.all()
    serializer = SocialMidiaSerialize(midia_social, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_technologies(request):
    technology = Technologies.objects.all()
    serializer = TechnologiesSerializer(technology, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_projects(request):
    projects = Projects.objects.all()
    serializer = ProjectsSerializer(projects, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def create_contact(request):
    serializer = ContactSerializer(data=request.data)
    send_email = EnviarEmailSMTP()

    if serializer.is_valid():
        contact = serializer.save()

        def envia_email_boas_vidas():
            name = contact.name
            email = contact.email
            send_email.enviar_email(name, email)
        thread_envia_email = Thread(target=envia_email_boas_vidas())
        thread_envia_email.start()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
