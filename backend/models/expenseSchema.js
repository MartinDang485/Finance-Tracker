const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = {
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    cost: {
        required: true,
        type: String
    }
}

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense