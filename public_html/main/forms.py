from .models import Comments
from django.forms import ModelForm, TextInput, EmailInput, Textarea, IntegerField, NumberInput




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
