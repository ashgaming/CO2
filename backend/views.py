from django.shortcuts import render
from rest_framework import status
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .serializers import ProductSerializer,LoginSerializer,FeedbackSerializer,RecordSerializer,InventorySerializer
from .models import Product,Login,Feedback,Record,Inventory
from django.http import JsonResponse
from django.views import View
from django.db.models import Count
from django.shortcuts import get_object_or_404

class ProductList(ListAPIView):    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def post(self,request,formate=None):
         #queryset = Product.objects.all()
        serializer_class = ProductSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response({'msg':'Product Added Sucessfully'},status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors,status=status.HTTP_400_BAD_REQUEST)


class LoginList(ListAPIView):    
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    def post(self,request,formate=None):
         #queryset = Product.objects.all()
        serializer_class = LoginSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response({'msg':'Sign in Sucessfully'},status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors,status=status.HTTP_400_BAD_REQUEST)

class FeedbackList(ListAPIView):    
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    def post(self,request,formate=None):
         #queryset = Product.objects.all()
        serializer_class = FeedbackSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response({'msg':'Feedback Added Sucessfully'},status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors,status=status.HTTP_400_BAD_REQUEST)

class RatingStatisticsView(View):
    def get(self, request, *args, **kwargs):
       # sum_value, avg_value,star1,star2,star3,star4,star5 = Feedback.get_average(Feedback)
        sum_value, avg_value,count,*star = Feedback.get_average(Feedback)
      #  data = {'sum': sum_value, 'average': avg_value ,'Star1':star1,'Star2':star2,'Star3':star3,'Star4':star4,'Star5':star5 } 
        data = {'sum': sum_value, 'average': avg_value ,'count':count,'Star1':star[0],'Star2':star[1],'Star3':star[2],'Star4':star[3],'Star5':star[4] } 
        return JsonResponse(data)

def get_feedback(request, id):
    try:
    # Retrieve the element by its id or return a 404 response if not found
        element = get_object_or_404(Feedback, id=id)
        data = {
            'id': element.id,
            'uid': element.uid,
            'name': element.name,
            'surname': element.surname,
            'review': element.review,
            'is_Valid': element.is_valid,
            'date':element.date,
            'time':element.time,
        }
        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


class RecordList(ListAPIView):    
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    def post(self,request,formate=None):
         #queryset = Product.objects.all()
        serializer_class = RecordSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response({'msg':'Record Added Sucessfully'},status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors,status=status.HTTP_400_BAD_REQUEST)


def index(request):
    allowed_method = ['get','post']
    return render(request,'index.html')

class InventoryList(ListAPIView):    
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

    def post(self,request,formate=None):
         #queryset = Product.objects.all()
        serializer_class = InventorySerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response({'msg':'Product Added Sucessfully'},status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors,status=status.HTTP_400_BAD_REQUEST)


class GetProductPrice(ListAPIView):
    def get(self, request, *args, **kwargs):
        name = request.query_params.get('pname', '')
        category = request.query_params.get('cat', '')

        try:
            product = Product.objects.get(name=name, category=category)
            return Response({'price': product.price})
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)