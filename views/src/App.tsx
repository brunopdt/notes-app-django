import React from 'react'
import './App.css'
import { Header } from './components/Header.tsx'
import { NotesListPage } from './pages/NotesListPage.tsx'

export const App = () => {
  return (
    <div>
      <Header />
      <NotesListPage />
    </div>
  )
}
