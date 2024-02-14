import { useEffect, useState, useCallback } from 'react'
import { INote } from '../interfaces/note.ts'
import { config } from '../config.ts'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export const NotePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState<INote | undefined>(undefined)

  const getNote = useCallback(async (): Promise<void> => {
    if (id === 'new') return

    const response = await fetch(`${config.BASE_URL}/api/notes/${id}`)
    const data: INote = await response.json()
    setNote(data)
  }, [id])

  const updateNote = useCallback(async (): Promise<void> => {
    await fetch(`${config.BASE_URL}/api/notes/${id}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }, [id, note])

  const createNote = useCallback(async (): Promise<void> => {
    await fetch(`${config.BASE_URL}/api/notes/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }, [note])

  const handleNoteChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setNote({
        ...note,
        body: e.target.value
      } as INote)
    },
    [note]
  )

  const handleDeleteNote = useCallback(async (): Promise<void> => {
    await fetch(`${config.BASE_URL}/api/notes/${id}/delete/`, {
      method: 'DELETE'
    })
    navigate('/')
  }, [id, navigate])

  const handleBackClick = useCallback(() => {
    if (id !== 'new' && !note?.body) handleDeleteNote()
    else if (id !== 'new') updateNote()
    else if (id === 'new' && note?.body) createNote()
    navigate('/')
  }, [createNote, handleDeleteNote, id, navigate, note?.body, updateNote])

  useEffect(() => {
    getNote()
  }, [getNote])

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleBackClick} />
        </h3>
        {id !== 'new' && <button onClick={handleDeleteNote}>Deletar</button>}
      </div>
      <textarea onChange={handleNoteChange} value={note?.body} />
    </div>
  )
}
