import { useEffect, useState, useCallback } from 'react'
import { INote } from '../interfaces/note.ts'
import { config } from '../config.ts'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export const NotePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState<INote | undefined>(undefined)

  const getNote = useCallback(async () => {
    const response = await fetch(`${config.BASE_URL}/api/notes/${id}`)
    const data: INote = await response.json()
    setNote(data)
  }, [id])

  const updateNote = useCallback(async () => {
    await fetch(`${config.BASE_URL}/api/notes/${id}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }, [id, note])

  const handleNoteChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNote({
        ...note,
        body: e.target.value
      } as INote)
    },
    [note]
  )

  const handleDeleteNote = useCallback(async () => {
    await fetch(`${config.BASE_URL}/api/notes/${id}/delete/`, {
      method: 'DELETE'
    })
    navigate('/')
  }, [id, navigate])

  const handleBackClick = useCallback(() => {
    updateNote()
    navigate('/')
  }, [navigate, updateNote])

  useEffect(() => {
    getNote()
  }, [getNote])

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleBackClick} />
        </h3>
        <button onClick={handleDeleteNote}>Delete</button>
      </div>
      <textarea onChange={handleNoteChange} defaultValue={note?.body} />
    </div>
  )
}
