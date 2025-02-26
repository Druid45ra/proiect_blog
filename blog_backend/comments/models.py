from django.db import models
from blog_backend.articles.models import Article

class Comment(models.Model):
    author = models.CharField(max_length=100)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.author} on {self.article}'
