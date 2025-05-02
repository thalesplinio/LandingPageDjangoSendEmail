from django.contrib import admin
from .models import SiteSetup, SocialMidia, Technologies, Projects, Contact


@admin.register(SiteSetup)
class SiteSetupAdmin(admin.ModelAdmin):
    list_display = "name", "email", "created_at"
    list_display_links = "name",
    search_fields = "id", "name", "email", "created_at",
    list_per_page = 1
    ordering = "-id",


@admin.register(SocialMidia)
class SocialMidiaAdmin(admin.ModelAdmin):
    list_display = "name", "link"
    list_display_links = "name",
    search_fields = "name",
    ordering = "-id",


@admin.register(Technologies)
class TechnologiesAdmin(admin.ModelAdmin):
    list_display = "name", "created_at"
    list_display_links = "name",
    search_fields = "name",
    ordering = "-id",


@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = "title", "subtitle", "description"
    list_display_links = "title",
    search_fields = "title", "subtitle", "description",
    ordering = "-id",


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = "name", "email"
    list_display_links = "name",
    search_fields = "name", "email",
    list_per_page = 15
    ordering = "-id",
