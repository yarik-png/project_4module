from django.db import models

class Article(models.Model):
    login = models.CharField("логин", max_length=30)
    password = models.CharField("пароль", max_length=30)
    email = models.EmailField("Электронная почта", max_length=30, blank=True)

    def __str__(self):
        return self.login

    class Meta:
        verbose_name = "Пользователя"
        verbose_name_plural = "Пользователи"

class Catalog(models.Model):
    name = models.CharField("имя товара", max_length=50)
    price = models.IntegerField("цена товара")
    sizes = models.TextField("размеры", max_length=150)
    deskription = models.TextField("описание товара ( для отдельной страницы )", blank=True)
    photo = models.ImageField("фотография товара ( для каталога )", upload_to='media/prod_images')
    miniphoto1 = models.ImageField("1 фотография товара ( для отдельной страницы )", upload_to='media/prod_images', blank=True)
    miniphoto2 = models.ImageField("2 фотография товара ( для отдельной страницы )", upload_to='media/prod_images', blank=True)
    miniphoto3 = models.ImageField("3 фотография товара ( для отдельной страницы )", upload_to='media/prod_images', blank=True)
    miniphoto4 = models.ImageField("4 фотография товара ( для отдельной страницы )", upload_to='media/prod_images', blank=True)
    category = models.CharField("категория товара", max_length=50)
    brand = models.CharField('Бренд товара', max_length=50)


    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
      
      
      
        
        
        
class Brands(models.Model):
    brand_name = models.CharField('имя бренда', max_length=40)
    
    def __str__(self):
        return self.brand_name
        
    class Meta:
        verbose_name = "Бренд"
        verbose_name_plural = "Бренды"
        





class Comments(models.Model):
    username = models.CharField('имя пользователя', max_length=40)
    comment_text = models.TextField('текст отзыва', max_length=150)
    score = models.IntegerField("оценка")

    def __str__(self):
        return self.comment_text


    class Meta:
        verbose_name = "Комментарий"
        verbose_name_plural = "Комментарии"


        
    

    