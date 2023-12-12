from django.shortcuts import render
from django.http import HttpResponse
from backend.serializers import ProductSerializer,LoginSerializer,FeedbackSerializer
from rest_framework.generics import ListAPIView
from backend.models import Product,Login,Feedback
#@api_view(['GET','POST'])
class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class LoginList(ListAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    
class FeedbackList(ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

def index(request):
    return render(request,'index.html')