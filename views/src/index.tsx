import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement || document.createElement('div'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
