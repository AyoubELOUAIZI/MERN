const { request } = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;
const connectionString = process.env.MONGO_URI;
//middleware
app.use(express.json());

//routes
app.use('/api/workout', workoutRoutes);



//routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});





//connecting with mongo db and then make the server listening in the port
mongoose.connect(connectionString).then(() => {
    console.log("\n********************Successfully connected to the database.");

    //listen for requests
    app.listen(PORT, () => {
        console.log(`Server is running on port 4010 or 3000 Click http://localhost:${PORT}`);
    });


})
    .catch(err => {
        console.log("Error connecting to the database: ", err);
    });




