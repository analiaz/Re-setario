import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetarioApp } from './ResetarioApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ResetarioApp />
    </BrowserRouter>

  </React.StrictMode>,
)
