const WorkoutModel = require('../models/WorkoutModel');
const mongoose = require('mongoose');

//1--Get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        // Attempt to fetch all workout documents from the database and sort them by the createdAt field in descending order
        const workouts = await WorkoutModel.find().sort({ createdAt: -1 });
        // If the fetch is successful, return a response with a 200 status code and the workouts as the body
        res.status(200).json(workouts);
    } catch (error) {
        // If an error occurs during the process, return a response with a 400 status code and the error message
        res.status(400).json({ error: error.message });
    }
};


//2--Get single workout
const getWorkout = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid workout id' });
    }
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
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid workout id' });
    }
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
    // Check if the workout id passed in the request is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        // If it's not a valid id, return a response with a 400 status code and an error message
        return res.status(400).json({ error: 'Invalid workout id' });
    }
    try {
        // Attempt to find and update the workout document in the database using the id and data from the request
        const workout = await WorkoutModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // If the workout is not found, return a response with a 404 status code and an error message
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        // If the update is successful, return a response with a 200 status code and the updated workout as the body
        res.status(200).json(workout);
    } catch (error) {
        // If an error occurs during the process, return a response with a 400 status code and the error message
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