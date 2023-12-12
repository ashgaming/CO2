from django.db import models
from django.utils import timezone

# Create your models here.
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    cat = models.CharField(max_length=50)
    pname = models.CharField(max_length=50)
    pdes = models.CharField(max_length=300,default=None)
    price = models.CharField(max_length=50, default=None)
    cap = models.CharField(max_length=50 ,default=None)
    rdate = models.DateField(default=None)
    sold = models.CharField(max_length=50,default='0')
  #  img = models.ImageField(upload_to='', height_field=None, width_field=None, max_length=None, default=None)


class Login(models.Model):
  id = models.AutoField(primary_key=True)
  uid = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  password = models.CharField(max_length=50)
  ltype = models.CharField(max_length=50)

class Record(models.Model):
  id = models.AutoField(primary_key=True)
  date = models.DateField(auto_now_add=True,blank=True)
  time = models.TimeField(auto_now_add=True,blank=True)
  uid = models.CharField(max_length=50)
  ptype = models.CharField(max_length=50)
  pname = models.CharField(max_length=50)
  quantity = models.CharField(max_length=50)
  amount = models.CharField(max_length=50)
  pay_method = models.CharField(max_length=50)
  reg_method = models.CharField(max_length=50)


class Feedback(models.Model):
  id = models.AutoField(primary_key=True)
  uid = models.CharField(max_length=50)
  name = models.CharField(max_length=50)
  surname = models.CharField(max_length=50)
  rating = models.IntegerField()
  review = models.CharField(max_length=250)
  date = models.DateField(auto_now_add=True,blank=True)
  time = models.TimeField(auto_now_add=True,blank=True)
  is_valid = models.BooleanField(default=True)

  def get_average(cls):
    star_ratings = []
    for rating in range(1, 6):
        star_count = cls.objects.aggregate(star=models.Sum(models.Case(models.When(rating=rating, then=1), default=0, output_field=models.IntegerField())))
        star_ratings.append(star_count['star'] or 0)

    avr = cls.objects.aggregate(sum=models.Sum('rating'), avg=models.Avg('rating'))

    sum_value = avr['sum'] or 0
    avg_value = avr['avg'] or 0
    count = cls.objects.count()

    return sum_value, avg_value,count, *star_ratings

  

    
  def checkValidate(self, *args, **kwargs):
        # Check if the object is being created for the first time
        if not self.pk:
            self.date = timezone.now()

        # Check if 24 hours have passed since creation
        if date.now() - self.date > date.timedelta(hours=24):
          if self.is_active == True:
            self.is_active = False

        super().checkValidate(*args, **kwargs)

class Inventory(models.Model):
    id = models.AutoField(primary_key=True)
    item = models.CharField(max_length=50)
    price = models.CharField(max_length=50, default=None)
    quantity = models.CharField(max_length=50 ,default=None)
    rdate = models.DateField(default=None)