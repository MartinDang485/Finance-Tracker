import {useEffect, useState} from 'react'

//Components
import IncomeCard from '../components/IncomeCard'
import ExpenseCard from '../components/ExpenseCard'
import Navbar from '../components/Navbar'
import BottomCardHeader from '../components/BottomCardHeader'

//MUI Components and Imports
import {Card, CardContent, Typography, IconButton} from '@mui/material'


const Home = () => {
    //Replace with useContext hook imports
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    
    const fetchdata = async () => {
        const incomeResponse = await fetch('http://localhost:3000/api/finance-tracker/income')
        const expenseResponse = await fetch('http://localhost:3000/api/finance-tracker/expense')
        const json1 = await incomeResponse.json()
        const json2 = await expenseResponse.json()

        if(!incomeResponse.ok) {
            throw new Error('Response not ok: income')
        }

        if(!expenseResponse.ok) {
            throw new Error('Response not ok: expense')
        }

        setIncomes(json1)
        setExpenses(json2)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className="Container">
            <Navbar/>
            <h2>Home</h2>
            
            <BottomCardHeader />

            <div className="bottom-cards">
                <div className="income-card">
                    {incomes && incomes.map((income) => (
                        <IncomeCard key={income._id} income={income}/>
                    ))}
                </div>

                <div className="expense-card">
                    <CardContent>
                        {expenses && expenses.map((expense) => (
                            <ExpenseCard key={expense._id} expense={expense}/>
                        ))}
                    </CardContent>
                </div>
            </div>
        </div>
    )
}

export default Home



