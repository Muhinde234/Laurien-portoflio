import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AdminApp from './admin/AdminApp.jsx'
import { ContentProvider } from './context/ContentContext.jsx'
import './index.css'

const isAdmin = window.location.pathname.startsWith('/admin')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentProvider>
      {isAdmin ? <AdminApp /> : <App />}
    </ContentProvider>
  </React.StrictMode>,
)
