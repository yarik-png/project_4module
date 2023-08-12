from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


app_name = "main"

urlpatterns = [
    path("", views.index, name="home"),
    path('about', views.about, name="about"),
    path('basket', views.basket, name="basket"),
    path('comments', views.comments, name="comments"),
    path('news', views.news, name="news"),
    path('<int:pk>', views.NewDetailView.as_view(), name="newprod"),
    path('new<int:pk>', views.NewNewView.as_view(), name="newnew"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

