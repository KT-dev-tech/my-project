
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const PORT = 4000;
require('dotenv').config();



// express app
const app = express()

// middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to the database
mongoose.connect('mongodb://localhost:27017/MERN_DB')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Connected to the DB & Listening on port ${PORT}`)
    })
})
.catch((err)=>{console.log(err)})
