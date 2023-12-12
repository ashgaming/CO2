from django.contrib import admin
from .models import Product,Login,Feedback,Record,Inventory


# Register your models here.
@admin.register(Product)
class Product_list(admin.ModelAdmin):
    list = ['id','cat','pname','pdes','price','cap','rdate','sold']#,'img']

@admin.register(Login)
class Login_Info(admin.ModelAdmin):
   info = ['id','uid','email','password','ltype']


@admin.register(Feedback)
class Feedback_Info(admin.ModelAdmin):
   feedback = ['id','uid','name','surname','rating','review','date','time','is_valid']

@admin.register(Record)
class Record_Info(admin.ModelAdmin):
   Record = ['id','date','time','uid','ptype','pname','quantity','amount','pay_method','reg_method']

@admin.register(Inventory)
class Inventory_list(admin.ModelAdmin):
    Inventory = ['id','item','price','quantity','rdate']