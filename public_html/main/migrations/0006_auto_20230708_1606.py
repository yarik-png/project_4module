# Generated by Django 3.2.20 on 2023-07-08 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_comments'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brands',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand_name', models.CharField(max_length=40, verbose_name='имя бренда')),
            ],
        ),
        migrations.CreateModel(
            name='Comments2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username2', models.CharField(max_length=40, verbose_name='имя пользователя2')),
                ('comment_text2', models.TextField(max_length=150, verbose_name='текст отзыва2')),
                ('score2', models.IntegerField(verbose_name='оценка2')),
            ],
            options={
                'verbose_name': 'Комментарий2',
                'verbose_name_plural': 'Комментарии2',
            },
        ),
        migrations.AlterModelOptions(
            name='comments',
            options={'verbose_name': 'Комментарий', 'verbose_name_plural': 'Комментарии'},
        ),
        migrations.AlterField(
            model_name='catalog',
            name='photo',
            field=models.ImageField(upload_to='static/main/prod_images', verbose_name='фотография товара ( для каталога )'),
        ),
    ]
