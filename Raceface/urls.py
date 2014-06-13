from django.conf.urls import patterns, include, url
from django.contrib import admin
from Raceface import views
from django.conf import settings
from django.conf.urls.static import static


admin.autodiscover()
urlpatterns = patterns('',
    url(r'^$', views.index),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^(?P<catalog_type>\w+)/', include('catalog.urls')),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
