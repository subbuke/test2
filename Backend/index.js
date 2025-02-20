const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const employeeRoutes = require('./routes/EmployeeRouter');

const app = express();
require('dotenv').config();
app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected")
}).catch((err) => {
    console.log(err)
})



app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/employees", employeeRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log("server running successfully")
})