from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-=d#vd4)j^w1e3j$t2162vm+*&75y!hj-)6)hrz_39n95kub3kn'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'backend',
    'corsheaders',
    'drf_standardized_errors',
    
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Co2.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, '/fronted/build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Co2.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
      #  'ENGINE': 'django.db.backends.postgresql',
      #  'NAME': 'CO2',
      #  'USER': 'postgres',
      #  'PASSWORD':'Wtya@7645',


     # "ENGINE": "django.db.backends.mysql",
     #   "NAME": "dr_co2",
     #   "USER": " root@localhost",
     #   "PASSWORD": "",
     #   "HOST": "127.0.0.1",
     #   "PORT": "5432",
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

#STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

SESSION_SERIALIZERS = 'django.contrib.sessions.serializers.JSONRenderer'

REST_FRAMEWORK = {
    "EXCEPTION_HANDLER": "drf_standardized_errors.handler.exception_handler"
  #  'DEFAULT_RENDERER_CLASSES':('rest_framework.renderers.JSONRenderer',),
  # 'DEFAULT_PERMISSION_CLASSES': (
  #     'rest_framework.permissions.DjangoModelPermissions',
  # ),
  # 'DEFAULT_AUTHENTICATION_CLASSES': (
  #     'rest_framework.authentication.SessionAuthentication',
  #     'rest_framework.authentication.TokenAuthentication',
  # )
}

DRF_STANDARDIZED_ERRORS = {"EXCEPTION_FORMATTER_CLASS":'backend.exception.MyExceptionFormatter'}

STATIC_URL = '/static/'
STATICFILES_DIRS = [
        os.path.join(BASE_DIR, './fronted/build/static')
]


MEDIA_ROOT = os.path.join(BASE_DIR,'./fronted/public/img')
MEDIA_URL = '/img/'