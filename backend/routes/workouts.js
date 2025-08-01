const express = require('express');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require( '../middleware/requireAuth')


const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

// GET all Workouts
router.get('/',getWorkouts )

// GET a single workout
router.get('/:id',getWorkout)

// POST a workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router;