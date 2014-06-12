from django.conf.urls import patterns, url

from catalog import views

urlpatterns = patterns('',
                       url(r'^$', views.index, name='index'),
                       url(r'^(?P<product_type>\w+)/$', views.product_type, name='product_type'),
                       url(r'^(?P<product_type>\w+)/(?P<product_name>\w+)/$', views.product_detail, name='product_detail'),
)