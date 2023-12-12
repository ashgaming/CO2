from django.contrib import admin
from django.urls import path,include
from backend import views
from .views import RatingStatisticsView
from .views import get_feedback
urlpatterns = [
    path('admin/', admin.site.urls),
    path('Product/', views.ProductList.as_view()),
    path('Login/', views.LoginList.as_view()),
    path('Feedback/', views.FeedbackList.as_view()),
    path('Feedback/stats', RatingStatisticsView.as_view()),
    path('Record/', views.RecordList.as_view()),
    path('Inventory/', views.InventoryList.as_view()),
    path('FeedBack/<int:id>/', get_feedback),
  #  path('Product/<int:pk>,', views.ProductList.as_view()),
    path('',views.index,name='index'),
    
]
