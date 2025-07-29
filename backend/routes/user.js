const express = require('express')

// Import Controller Functions

const {loginUser, signupUser} = require('../controllers/usercontroller')

const router = express.Router()

//login route
router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)


module.exports = router