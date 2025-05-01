from rest_framework import serializers
from .models import SiteSetup, SocialMidia, Technologies


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
