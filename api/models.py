from django.db import models

# Create your models here.
class Note(models.Model):
  body = models.TextField(blank=True)
  updated_at = models.DateTimeField(auto_now=True)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.body[0:50]