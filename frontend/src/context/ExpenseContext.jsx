import { createContext, useReducer } from 'react'

export const ExpenseContext = createContext()

//reducer function
export const expenseReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EXPENSE':
            return { expenses: action.payload}
        case 'ADD_EXPENSE':
            return { expenses: [action.payload, ...state.expenses]}
        case 'DELETE_EXPENSE':
            return { expenses: state.expenses.filter((w) => w._id !== action.payload._id)}
        default:
            return state
    }
}

export const ExpenseContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(expenseReducer, {
        expenses: null
    })

    return (
        <ExpenseContext.Provider value={(state, dispatch)}>
            { children }
        </ExpenseContext.Provider>
    )
}

