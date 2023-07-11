from .models import Article, Comments
from django.forms import ModelForm, TextInput, EmailInput, Textarea, IntegerField, NumberInput

class ArticleForm(ModelForm):
    class Meta:
        model = Article
        fields = ['login', 'password', 'email']

        widgets = {
            'login': TextInput(attrs={
                'class': 'form-control',
                'placeholder': "Логин"
            }),

            'password': TextInput(attrs={
                'class': 'form-control',
                'placeholder': "Пароль"
            }),

            'email': EmailInput(attrs={
                'class': 'form-control',
                'placeholder': "Email"
            })
        }


class CommentForm(ModelForm):
    class Meta:
        model = Comments
        fields = ['username', 'comment_text', "score"]

        widgets = {
            'username': TextInput(attrs={
                'class': 'input_name',
                'placeholder': "Ваше имя"
            }),

            'comment_text': Textarea(attrs={
                'class': 'input_text',
                'placeholder': "Отзыв"
            }),

            'score': NumberInput(attrs={
                'class': 'score_input',

            }),



        }
