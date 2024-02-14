import React, { useEffect, useState, useCallback } from 'react'
import { config } from '../config.ts'

interface INote {
  id: number
  body: string
  created_at: string
  updated_at: string
}

export const NotesListPage = () => {
  const [notes, setNotes] = useState<INote[] | []>([])

  const getNotes = useCallback(async () => {
    const response = await fetch(`${config.BASE_URL}/api/notes`)
    const data: INote[] = await response.json()
    setNotes(data)
  }, [])

  useEffect(() => {
    getNotes()
  }, [getNotes])

  return (
    <div>
      <div className="notes-list">
        {notes.map((note: INote) => (
          <div key={note.id} className="note">
            <p>{note.body}</p>
            <p>Created at: {note.created_at}</p>
            <p>Updated at: {note.updated_at}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
