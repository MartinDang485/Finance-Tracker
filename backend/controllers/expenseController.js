const Expense = require('../models/expenseSchema')
const mongoose = require('mongoose')
const express = require('express')

//const get all expenses

const getExpense = async (req, res) => {
    const expense = await Expense.find()
    res.status(200).json(expense)
}
//Add an expense
const addExpense = async (req, res) => {
    const { title, description, cost } = req.body

    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(!cost) {
        emptyFields.push('cost')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all required fields', emptyFields})
    }

    const expense = await Expense.create({title, description, cost})
    res.status(200).json(expense)
}

//Modify an expense
const putExpense = async (req, res) => {
    const { id } = req.params
    const { title, description, cost } = req.body
    const expense = await Expense.findByIdAndUpdate({_id: id}, {title, description, cost}, {new: true})

    if(!expense) {
        return res.status(400).json({error: 'No expense found'})
    }

    res.status(200).json(expense)
}

//Delete an expense
const deleteExpense = async (req, res) => {
    const { id } = req.params
    const expense = await Expense.findOneAndDelete({_id: id})

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'No such workout found'})
    }

    res.status(200).json({message: "workout deleted", expense})
}

module.exports = { getExpense, addExpense, putExpense, deleteExpense}