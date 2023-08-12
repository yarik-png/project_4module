from django.db import models


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
      
      
      
        
        
        
class Comments(models.Model):
    username = models.CharField('имя пользователя', max_length=40)
    comment_text = models.TextField('текст отзыва', max_length=150)
    score = models.IntegerField("оценка")

    def __str__(self):
        return self.comment_text


    class Meta:
        verbose_name = "Комментарий"
        verbose_name_plural = "Комментарии"


        
    

class News(models.Model):
    header = models.CharField('Заголовок', max_length=70)
    news_text = models.TextField('текст новости')
    photo = models.ImageField("картинка для новости", upload_to="media/prod_images", blank=True)
    

    def __str__(self):
        return self.header
    
    
    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"
