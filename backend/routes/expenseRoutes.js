const express = require('express')
const router = express.Router()

//Import controller functions 
const { getExpense, addExpense, putExpense, deleteExpense} = require('../controllers/expenseController')

router.get('/expense', getExpense)

//Add
router.post('/addexpense', addExpense)

//Modify 
router.put('/modifyexpense/:id', putExpense)

//Delete
router.delete('/:id', deleteExpense)

module.exports = router