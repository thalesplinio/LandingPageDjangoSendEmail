from django.contrib import admin
from .models import SiteSetup


@admin.register(SiteSetup)
class SiteSetupAdmin(admin.ModelAdmin):
    list_display = "name", "email", "created_at"
    list_display_links = "name",
    search_fields = "id", "name", "email", "created_at"
    list_per_page = 1
    ordering = "-id",
