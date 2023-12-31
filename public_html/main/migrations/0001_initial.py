# Generated by Django 4.2 on 2023-06-14 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.CharField(max_length=30, verbose_name='логин')),
                ('password', models.CharField(max_length=30, verbose_name='пароль')),
                ('email', models.EmailField(blank=True, max_length=30, verbose_name='Электронная почта')),
            ],
        ),
        migrations.CreateModel(
            name='Catalog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='имя товара')),
                ('price', models.IntegerField(verbose_name='цена товара')),
                ('deskription', models.TextField(verbose_name='описание товара')),
                ('photo', models.ImageField(upload_to='', verbose_name='фотография товара')),
                ('category', models.CharField(max_length=50, verbose_name='категория товара')),
            ],
        ),
    ]
