# type: ignore
# flake8: noqa
from django.db import models


class SocialMidia(models.Model):
    class Meta:
        verbose_name = "Mídia social"
        verbose_name_plural = "Mídias sociais"

    name = models.CharField(max_length=30)
    link = models.URLField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Technologies(models.Model):
    class Meta:
        verbose_name = "Tecnologia"
        verbose_name_plural = "Tecnologias"

    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class SiteSetup(models.Model):
    class Meta:
        verbose_name = "Configuração Site"
        verbose_name_plural = "Configurações site"

    name = models.CharField(max_length=50)
    email = models.EmailField()
    image = models.ImageField(upload_to="foto/", null=False, blank=False)
    description = models.CharField(max_length=100)
    pdf = models.FileField(upload_to="pdfs/")
    name_footer = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Projects(models.Model):
    class Meta:
        verbose_name = "Projeto"
        verbose_name_plural = "Projetos"

    icon = models.ImageField(upload_to="icons/", null=False, blank=False)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    description = models.CharField(max_length=150)
    link_project = models.URLField(max_length=155)
    created_at = models.DateTimeField(auto_now_add=True)


class Contact(models.Model):
    class Meta:
        verbose_name = "Contato"
        verbose_name_plural = "Contatos"

    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}, {self.email}"
