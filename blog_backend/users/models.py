from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Adaugă câmpuri suplimentare pentru modelul User, dacă este necesar
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

