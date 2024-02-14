import { INote } from '../interfaces/note.ts'
import { Link } from 'react-router-dom'

interface IListItemParams {
  note: INote
}

export const ListItem = ({ note }: IListItemParams) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <p>{note?.body}</p>
      </div>
    </Link>
  )
}
