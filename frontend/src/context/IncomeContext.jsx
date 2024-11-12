import {createContext, useReducer } from 'react'

export const IncomeContext = createContext()

export const incomeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INCOME':
            return { income: action.payload }
        case 'ADD_INCOME':
            return { income: action.payload, ...state.income}
        case 'DELETE_INCOME':
            return { income: state.income.filter((w) => w._id !== action.payload._id)}
        default: 
            return state
    }
}
   

export const IncomeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(incomeReducer, {
        income: null
    })
    return (
        <IncomeContext.Provider value={{...state, dispatch}}>
            { children }
        </IncomeContext.Provider>
    )
}