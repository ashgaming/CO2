from rest_framework import serializers
from .models import Product,Login,Feedback,Record,Inventory

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','cat','pname','pdes','price','cap','rdate','sold']
      #  fields = ['id','cat','pname','pdes','price','cap','rdate','sold']
       # fields = ['id','cat','pname','pdes','price','cap','rdate','sold','img']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['id','uid','email','password','ltype']

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id','uid','name','surname','rating','review','date','time','is_valid']

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ['id','date','time','uid','ptype','pname','quantity','amount','pay_method','reg_method']
        fields = ['id','date','time','uid','ptype','pname','quantity','amount','pay_method','reg_method']

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ['id','item','price','quantity','rdate']