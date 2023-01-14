const express = require('express');
const router = express.Router();

//1--Get all workouts
router.get('/', (req, res) => {   
        res.json({mssg:"get all workouts"});
    });

//2--Get single workout
router.get('/:id', (req, res) => {   
    res.json({ mssg:"Get single workout"});
    });
//3--post a new workout
router.post('/', (req, res) => {
    // Insert workout into the database
    res.json({ message: 'Workout created successfully' });
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
