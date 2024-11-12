import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Context
import { IncomeContextProvider } from './context/IncomeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IncomeContextProvider>
      <App />
    </IncomeContextProvider>
  </StrictMode>,
)
