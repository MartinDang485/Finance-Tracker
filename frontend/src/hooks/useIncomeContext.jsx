import { IncomeContext } from '../context/IncomeContext'
import { useContext } from 'react'

export const useIncomeContext = () => {
    const context = useContext(IncomeContext)
    if(!context) {
        throw Error('UseIncomeContext must be inside useIncomeContextProvider')
    }

    return context
}