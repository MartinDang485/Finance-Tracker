import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Context
import { IncomeContextProvider } from './context/IncomeContext'
import { ExpenseContextProvider } from './context/ExpenseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IncomeContextProvider>
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
    </IncomeContextProvider>
  </StrictMode>,
)
