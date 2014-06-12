from django.contrib import admin
from catalog.models import Catalog
from catalog.models import Product

# Register your models here.
admin.site.register(Catalog)
admin.site.register(Product)
