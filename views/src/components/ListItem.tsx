import { INote } from '../interfaces/note.ts'
import { Link } from 'react-router-dom'

interface IListItemParams {
  note: INote
}

export const ListItem = ({ note }: IListItemParams) => {
  const date = new Date(note.updated_at)
  const time = `${date.getHours()}:${
    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  }`

  const getTitle = (): string =>
    note.body?.length > 40 ? note?.body.slice(0, 40) + '...' : note?.body

  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <p>{getTitle()}</p>
        <p>
          <span>{`${date.toLocaleDateString()} - ${time}`}</span>
        </p>
      </div>
    </Link>
  )
}
