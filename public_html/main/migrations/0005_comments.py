# Generated by Django 4.2 on 2023-06-21 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_catalog_brand_alter_catalog_sizes'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=40, verbose_name='имя пользователя')),
                ('comment_text', models.TextField(max_length=150, verbose_name='текст отзыва')),
                ('score', models.IntegerField(verbose_name='оценка')),
            ],
        ),
    ]
