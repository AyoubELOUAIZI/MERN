const WorkoutModel = require('../models/WorkoutModel');


//1--Get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await WorkoutModel.find().sort({createdAt:-1});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//2--Get single workout
const getWorkout = async (req, res) => {
    try {
        const workout = await WorkoutModel.findById(req.params.id);
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//3--post a new workout
const createWorkout = async (req, res) => { // listen to post request on '/'
    const { title, load, reps } = req.body // destructuring the request body to extract the title, load, and reps
   //add doc to db
    try {
        const workout = await WorkoutModel.create({ title, load, reps }) // create new workout using the destructured data //i did the change from workout to WorkoutModel
        res.status(200).json(workout) // send a json response with the created workout
    } catch (error) {
        res.status(400).json({ error: error.message }) // if there is an error during the creation, send a json response with the error message
    }
}

 //4-- Delete workout from the database
const deleteWorkout = async (req, res) => {
    try {
        const workout = await WorkoutModel.findByIdAndDelete(req.params.id);
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//5-- Update workout in the database
const updateWorkout = async (req, res) => {
    try {
        const workout = await WorkoutModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getAllWorkouts,
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
};