import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChampionContextProvider} from '../src/context/ChampionContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ChampionContextProvider>
      <App />
    </ChampionContextProvider>
  // </React.StrictMode>,
)
