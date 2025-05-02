from rest_framework import serializers
from .models import SiteSetup, SocialMidia, Technologies, Projects, Contact


class SiteSetupSerialize(serializers.ModelSerializer):
    class Meta:
        model = SiteSetup
        fields = "__all__"


class SocialMidiaSerialize(serializers.ModelSerializer):
    class Meta:
        model = SocialMidia
        fields = "__all__"


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologies
        fields = "__all__"


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
