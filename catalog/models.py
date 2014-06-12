from django.db import models

# Create your models here.
class Catalog(models.Model):
    def __unicode__(self):
        return self.version
    
    version = models.CharField(max_length=10)
    
class Product(models.Model):
    def __unicode__(self):
        return self.name

    catalog = models.ForeignKey(Catalog)
    name = models.CharField(max_length=100)
    overview = models.CharField(max_length=2048)
    features = models.CharField(max_length=2048)
    specs = models.CharField(max_length=2048)
    