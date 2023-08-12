import time
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import CommentForm
from .models import Catalog, Comments, News
from django import forms
from django.views.generic import DetailView
import urllib.parse
from PIL import Image
import os


cart = 1
is_auth = 0
login = ''
corrdate = []






class NewDetailView(DetailView):
    model = Catalog
    template_name = 'main/details_view.html'
    context_object_name = 'product'

class NewNewView(DetailView):
    model = News
    template_name = 'main/new_view.html'
    context_object_name = 'new'


def index(request):
    
    brands = []
    categories = []

    prod = Catalog.objects.all()
    # brands = Brands.objects.all()
    sq = request.GET.get('search')
    
    
    for item in prod:
        if item.brand not in brands:
            brands.append(item.brand)
    
    
    
    for item in prod:
        if item.category not in categories:
            categories.append(item.category)
    
    
    if sq:
        pass
    else:
        sq = None
    print(sq)
    global is_auth
    data = {
        'prod': prod,
        "search_query": sq,
        "is_auth" : is_auth,
        "brands": brands,
        "categories": categories,
    }
    return render(request, "main/mainpage.html", data)

def about(request):
    global is_auth
    data = {
        "is_auth": is_auth
    }
    return render(request, "main/about.html", data)





def basket(request):

    encode = request.COOKIES.get('basket')
    
    try:
        basket = urllib.parse.unquote(encode)
    except: basket = 0

    if basket == ",":
        basket = ''



    if basket:
        basket = urllib.parse.unquote(encode)
        basket = basket.split(',')
        basket.pop()
        print(basket, " корзина")

        catalog = Catalog.objects.all()

        products = []


        for item in basket:
            try:
                products.append(catalog.get(pk=item))
            except Exception: pass



        if products:
            sost = 1

        else: sost = 0


        data = {
            "basket": basket,
            "catalog": products,
            "sost": sost
        }

        return render(request, "main/basket.html", data)

    else:
        data = {
            "sost": 0
        }
        return render(request, "main/basket.html", data)


def comments(request):
    is_comm = 0

    comments = Comments.objects.all()
    form = CommentForm()


    encode = request.COOKIES.get('secret_key_comm')
    try:
        is_comm = urllib.parse.unquote(encode)
    except Exception:
        pass


    print(is_comm)
    if is_comm == "121912":
        data = {
            "comments": comments,
            "form": form,
            'is_comm': 1
        }

        return render(request, "main/comments.html", data)

    else:
        if request.method == "POST":
            form = CommentForm(request.POST)
            if form.is_valid():
                form.save()
                response = redirect('/')
                response.set_cookie("secret_key_comm", '121912', max_age=86400,)
                return response
            else:
                pass




        data = {
            "comments": comments,
            "form": form,
            "is_comm:": 2
        }
        return render(request, "main/comments.html", data)
        
        

def news(request):
    news = News.objects.all()
    data = {
            'news': news,
        }
    return render(request, "main/news.html", data)
