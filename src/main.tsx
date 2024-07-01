import React from 'react'
import ReactDOM from 'react-dom/client'
import FarmStead from './FarmStead.tsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FarmStead />
    </BrowserRouter>
  </React.StrictMode>,
)
