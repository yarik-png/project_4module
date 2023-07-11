import time
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import CommentForm
from .models import Article, Catalog, Comments, Brands
from django import forms
from django.views.generic import DetailView
import urllib.parse

cart = 1
is_auth = 0
login = ''
corrdate = []



def add_to_cart(request, prod_id):
    prod = Catalog.objects.all()
    prod1 = prod[prod_id-1]
    print(prod1)
    data = {
        "is_auth": is_auth,
        "id_prod": prod_id,
        "prod": prod1,
    }
    print(prod_id)
    return render(request, 'main/cart_add.html', data)


class NewDetailView(DetailView):
    model = Catalog
    template_name = 'main/details_view.html'
    context_object_name = 'product'



def index(request):



    prod = Catalog.objects.all()
    brands = Brands.objects.all()
    sq = request.GET.get('search')
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
    }
    return render(request, "main/mainpage.html", data)

def about(request):
    global is_auth
    data = {
        "is_auth": is_auth
    }
    return render(request, "main/about.html", data)

def registration(request):
    global is_auth
    is_auth = 0
    error = ""
    if request.method == "POST":
        form = ArticleForm(request.POST)
        if form.is_valid():
            form.save()
            error = ""
            return redirect("auth")
        else:
            error = ""


    form = ArticleForm()

    data = {
        'error': error,
        'form': form,
        "is_auth": is_auth
    }

    return render(request, "main/registration.html", data)


def auth(request):
    global corrdate
    global is_auth
    global login
    error = ""
    form = ArticleForm()
    users = Article.objects.all()
    getlogin = request.POST.get('log')
    getpassword = request.POST.get('pass')
    getemail = 'def'

    login = getlogin

    if getlogin:
        print("выполнено213123")
        for item in users:
            if item.login == getlogin or getlogin == item.email:
                if str(item.password) == str(getpassword):
                    print("SUCCERFULLY LOGIN")
                    is_auth = 1
                    error = ""
                    corrdate = [item.login, item.email, item.password]
                    return redirect("/cabinet")


            else:
                print("dont succerfully login")
                error = "Неверный логин или пароль"


    data = {
        'error': error,
        'form': form,
        "is_auth": is_auth,
        "users": users.all,
        'getpassword': getpassword,
        'getlogin': getlogin,


    }

    return render(request, "main/authorization.html", data)

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
