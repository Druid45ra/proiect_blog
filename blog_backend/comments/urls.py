from django.urls import path
from .views import comment_list, comment_detail

urlpatterns = [
    path('comments/', comment_list, name='comment_list'),
    path('comments/<int:pk>/', comment_detail, name='comment_detail'),
]
