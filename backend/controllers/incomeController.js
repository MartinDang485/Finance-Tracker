const mongoose = require('mongoose')
const express = require('express')
const Income = require('../models/incomeSchema')
const Expense = require('../models/expenseSchema')

//Get all
const getIncome = async (req, res) => {
    const income = await Income.find()
    res.status(200).json(income)
}

//Post a new income
const postIncome = async (req, res) => {
    const { title, monthly} = req.body
    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }
    if(!monthly) {
        emptyFields.push('monthly')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

    const income = await Income.create({title, monthly})
    res.status(200).json(income)
}

//Modify an existing income
const putIncome = async (req, res) => {
    const { id } = req.params
    const { title,monthly } = req.body
    const income = await Income.findByIdAndUpdate({_id: id}, { title, monthly}, { new: true})

    if(!income) {
        return res.status(400).json({message: 'No income found'})
    }

    res.status(200).json(income)
}

module.exports = { getIncome, postIncome, putIncome}
