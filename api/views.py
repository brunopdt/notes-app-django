from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.utils import delete_note, create_note, get_note_by_id, get_notes, update_note

@api_view(['GET'])
def get_routes(request):
  routes = [
    {
        'Endpoint': '/notes/',
        'method': 'GET',
        'body': None,
        'description': 'Returns an array of notes'
    },
    {
        'Endpoint': '/notes/id',
        'method': 'GET',
        'body': None,
        'description': 'Returns a single note object'
    },
    {
        'Endpoint': '/notes/create/',
        'method': 'POST',
        'body': {'body': ""},
        'description': 'Creates new note with data sent in post request'
    },
    {
        'Endpoint': '/notes/id/update/',
        'method': 'PUT',
        'body': {'body': ""},
        'description': 'Creates an existing note with data sent in post request'
    },
    {
        'Endpoint': '/notes/id/delete/',
        'method': 'DELETE',
        'body': None,
        'description': 'Deletes and exiting note'
    },
  ]

  return Response(routes)

@api_view(['GET','POST'])
def operate_notes_from_request(request):
  if request.method == 'GET':
    return get_notes()
  elif request.method == 'POST':
   return create_note(request)

@api_view(['GET', 'PUT', 'DELETE'])
def operate_notes_from_key(request, pk):
  if request.method == 'GET':
    return get_note_by_id(pk)
  elif request.method == 'PUT':
    return update_note(request, pk)
  elif request.method == 'DELETE':
    return delete_note(pk)