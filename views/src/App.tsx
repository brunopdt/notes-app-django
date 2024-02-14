import React from 'react'
import './App.css'
import { Header } from './components/Header.tsx'
import { NotesListPage } from './pages/NotesListPage.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotePage } from './pages/NotePage.tsx'

export const App = () => {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" Component={NotesListPage} />
            <Route path="note/:id" Component={NotePage} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
