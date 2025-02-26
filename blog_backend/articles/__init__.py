# This is the __init__.py file for the articles module.
# It initializes the articles package and makes its components available for import.

from .models import Article, Author
from .views import article_view, author_view
from .controllers import ArticleController, AuthorController

__all__ = [
    'Article',
    'Author',
    'article_view',
    'author_view',
    'ArticleController',
    'AuthorController'
]
