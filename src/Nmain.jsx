import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Simplified routing */}
    </BrowserRouter>
  </React.StrictMode>
)

// Register service worker for offline caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch((err) => {
    console.error('Service Worker registration failed:', err); // Improved error handling
  })
}
