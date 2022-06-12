import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.scss'
import App from './components/App/App'
import { EpisodesProvider } from './context/episodeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <EpisodesProvider>
      <App />
    </EpisodesProvider>
  </React.StrictMode>
)
