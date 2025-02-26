from django.contrib import admin
from .models import Comment

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('author', 'article', 'content', 'created_at')
    search_fields = ('author', 'content')
    list_filter = ('created_at', 'article')
