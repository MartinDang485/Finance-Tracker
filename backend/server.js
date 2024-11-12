const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

//Import Routes
const incomeRoutes = require('./routes/incomeRoutes')
const expenseRoutes = require('./routes/expenseRoutes')

//Start app
const app = express()
app.use(express.json())

//Middleware
app.use((req, res, next) => {
    //CORS configs
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    console.log(req.path, req.method)
    next()
})

//Register Routes
app.use('/api/finance-tracker', incomeRoutes) //Put routes here
app.use('/api/finance-tracker', expenseRoutes)

//CORS config
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET, POST, PUT, DELETE']
}))

//Connect to db then once connected, listen to port
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB')
        app.listen(process.env.PORT, () => {
            console.log('Listening on Port 3000') //Remove port number in prod
        })
    })
    .catch((error) => {
        console.log(error)
    })
