const { request } = require("express");
require('dotenv').config();


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//The middleware function
app.use((req, res, next) => {
    // Perform some actions
    console.log("object");
    console.log(req.path);
    console.log(req.method);
    console.log(next);
    next();
});

//routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

//routes
app.get("/1", (req, res) => {   
    res.json({mssg:"jilalia .. .. ....."})
});

//listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port 4010 or 3000 Click http://localhost:${PORT}`);
});
