from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response

def create_note(request):
  data = request.data
  note = Note.objects.create(
    body=data['body']
  )
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)

def delete_note(pk):
  note = Note.objects.get(id=pk)
  note.delete()
  return Response(status=204, data="Item Deleted")
  
def get_notes():
  notes = Note.objects.all().order_by('-updated_at')
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)

def get_note_by_id(pk):
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)

def update_note(request, pk):
  data = request.data
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(instance=note, data=data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)
