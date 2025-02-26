# This is the __init__.py file for the comments module.
# It initializes the comments package and makes its components available for import.

from .models import Comment
from .views import comment_view
from .controllers import CommentController

__all__ = [
    'Comment',
    'comment_view',
    'CommentController'
]
