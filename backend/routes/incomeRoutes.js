const express = require('express')
const router = express.Router()

//Import controller functions
const { getIncome, postIncome, putIncome } = require('../controllers/incomeController')
//Route functions

//Get all there should only be one
router.get('/income', getIncome)

//Post a new one
router.post('/addincome', postIncome)

//Modify, PUT
router.put('/:id', putIncome )

module.exports = router