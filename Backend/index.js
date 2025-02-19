const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log("server running successfully")
})