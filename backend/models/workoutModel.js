const mongoose = require('mongoose'); // importing the mongoose package

const Schema = mongoose.Schema // creating a constant variable that references the mongoose schema property
const workoutSchema = new Schema({ // create new schema for workouts 
    title: { //title property 
        type: String, // should be a string 
        required: true // required field
    },
    reps: { // reps property
        type: Number, // should be a number
        required: true // required field
    },
    load: { // load property
        type: Number, // should be a number
        required: true // required field
    }
}, { timestamps: true }) // adds timestamps to record when workout is created and updated
module.exports = mongoose.model("WorkoutModel", workoutSchema); // exporting the workout model
/*
The code is defining a new Mongoose schema for a workout, 
which includes three properties: title, reps, and load, 
all of which are required and are of type String and Number respectively.
The code also adds timestamps property to the schema, 
which will automatically add createdAt and updatedAt fields with the timestamps.
 Finally, the code exports the workout model as a module.
*/