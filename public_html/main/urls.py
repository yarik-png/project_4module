from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


app_name = "main"

urlpatterns = [
    path("", views.index, name="home"),
    path('about', views.about, name="about"),
    path('registration', views.registration, name="registration"),
    path('auth', views.auth, name="auth"),
    path('basket', views.basket, name="basket"),
    path('comments', views.comments, name="comments"),
    path('<int:pk>', views.NewDetailView.as_view(), name="newprod"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

