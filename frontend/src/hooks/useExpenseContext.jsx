import { ExpenseContext } from '../context/ExpenseContext'
import { useContext } from 'react'

export const UseExpenseContext = () => {
    const context = useContext(ExpenseContext)
    if(!context) {
        throw Error('UseExpenseContext must be inside useExpenseContextProvider')
    }

    return context
}