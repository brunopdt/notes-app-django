import { useEffect, useState, useCallback } from 'react'
import { config } from '../config.ts'
import { INote } from '../interfaces/note.ts'
import { ListItem } from '../components/ListItem.tsx'
import { AddButton } from '../components/AddButton.tsx'

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
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notas</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note: INote) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  )
}
