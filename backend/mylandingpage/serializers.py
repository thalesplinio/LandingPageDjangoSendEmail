from rest_framework import serializers
from .models import SiteSetup


class SiteSetupSerialize(serializers.ModelSerializer):
    class Meta:
        model = SiteSetup
        fields = "__all__"
