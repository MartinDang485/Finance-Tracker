const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = {
    title: {
        required: true,
        type: String
    },
    monthly: {
        required: true,
        type: Number
    }
}

const Income = mongoose.model('Income', incomeSchema)
module.exports = Income

