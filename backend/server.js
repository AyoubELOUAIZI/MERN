const { request } = require("express");
require('dotenv').config();

const workoutRoutes = require('./routes/wourkouts');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
//routes
app.use('/api/workout', workoutRoutes);

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});














//listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port 4010 or 3000 Click http://localhost:${PORT}`);
});
