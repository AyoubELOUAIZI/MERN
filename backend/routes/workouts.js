const express = require('express');
const router = express.Router();
const WorkoutModel = require('../models/workoutModel');

//1--Get all workouts
router.get('/', (req, res) => {   
        res.json({mssg:"get all workouts"});
    });

//2--Get single workout
router.get('/:id', (req, res) => {   
    res.json({ mssg:"Get single workout"});
    });

//-------------------------------//
//3--post a new workout
router.post('/', async (req, res) => { // listen to post request on '/'
    const { title, load, reps } = req.body // destructuring the request body to extract the title, load, and reps
    try {
        const workout = await WorkoutModel.create({ title, load, reps }) // create new workout using the destructured data //i did the change from workout to WorkoutModel
        res.status(200).json(workout) // send a json response with the created workout
    } catch (error) {
        res.status(400).json({ error: error.message }) // if there is an error during the creation, send a json response with the error message
    }
});




 //4-- Delete workout from the database
router.delete('/:id', (req, res) => {
   // const workoutId = req.params.id;
    res.json({ message: 'Workout deleted successfully' });
});

//5-- Update workout in the database
router.put('/:id', (req, res) => {
  //  const workoutId = req.params.id;
  //  const updatedWorkout = req.body;
    res.json({ message: 'Workout updated successfully' });
});

//6-- Update workout in the database with new properties
router.patch('/:id', (req, res) => {
    const workoutId = req.params.id;
    const updatedWorkoutProperties = req.body;
    // Update workout in the database with new properties
    res.json({ message: 'Workout updated successfully' });
});







module.exports = router;
