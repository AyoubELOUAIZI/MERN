const express = require('express');
const router = express.Router();
const {
    getAllWorkouts,
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}= require('../controllers/workoutController');


//1--Get all workouts
router.get('/', getAllWorkouts);

//2--Get single workout
router.get('/:id', getWorkout);

//-------------------------------//
//3--post a new workout
router.post('/', createWorkout );


//4-- Delete workout from the database
router.delete('/:id', deleteWorkout);


//5-- Update workout in the database with new properties
router.patch('/:id', updateWorkout);


module.exports = router;
