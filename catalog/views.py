from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

from catalog.models import Catalog, Product

# Create your views here.

def index(request, catalog_type):
    return HttpResponse("Catalog index page for type %s" % catalog_type)

def product_type(request, catalog_type, product_type):
    
    product_list = Product.objects.order_by('name')
    template = loader.get_template('product_type.html')
    context = RequestContext(request, {'product_list': product_list})

    return HttpResponse(template.render(context))
    

def product_detail(request, catalog_type, product_type, product_name):
    return HttpResponse("You're looking at catalog type %s, product type %s, product %s" % (catalog_type, product_type, product_name))