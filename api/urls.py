from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('notes/', views.operate_notes_from_request, name="operate_notes_from_request"),
    path('notes/<str:pk>/', views.operate_notes_from_key, name="operate_notes_from_key"),
]