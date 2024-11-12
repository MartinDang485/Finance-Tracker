import {useState} from 'react'
import {Card, CardContent, Typography, IconButton} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

//context hooks
import { useIncomeContext } from '../hooks/useIncomeContext'


const BottomCardHeader = () => {
    //Usestate for pop up forms
    const [isIncomeModal, setIsIncomeModal] = useState(false)
    const [isExpenseModal, setIsExpenseModal] = useState(false)

    //Use state for all input params
    const [incomeTitle, setIncomeTitle] = useState('')
    const [incomeMonthly, setIncomeMonthly] = useState('')
    const [incomeEmptyFields, setIncomeEmptyFields] = useState([])
    const [incomeError, setIncomeError] = useState('')

    const incomeState= () => {
        setIsIncomeModal(true)
    }

    const expenseState = () => {
        setIsExpenseModal(true)
    }

    //To add income
    const incomeAdd = async (e) => {
        e.preventDefault()

        const income = { incomeTitle, incomeMonthly}

        const response = await fetch('localhost:3000/api/finance-tracker/addincome', {
            method: 'POST',
            body: JSON.stringify(income),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            //handle error responses
            //Empty fields errors
        }

        if(response.ok) {
            //clear useState fields: title, monthly, emptyFields, error
            //Console log new income added
            //Set dispsatch to create
        }
    }
    return (
        <div className="bottom-card-header">
            <h3>Income</h3>
            <IconButton className="incomeAdd" onClick={incomeState}><AddCircleIcon color="success"/></IconButton>
            <h3>Expenses</h3>
            <IconButton className="expenseAdd" onClick={expenseState}><AddCircleIcon color="success"/></IconButton>

            {isIncomeModal && 
                <form onSubmit={incomeAdd}>
                    <label>Title</label>
                    <input
                        type="String"
                        onChange={(e) => setIncomeTitle(e.target.value)}
                        value = {incomeTitle}
                        className={incomeEmptyFields.includes('title') ? 'error': ''}
                    />
                    <label>Monthly</label>
                    <input
                        type="number"
                        onChange={(e) => setIncomeMonthly(e.target.value)}
                        value = {incomeMonthly}
                        className={incomeEmptyFields.includes('monthly') ? 'error': ''}
                    />
                    <button>Submit</button>
                </form>
            }

        </div>
    )
}

export default BottomCardHeader