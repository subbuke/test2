const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const student = require("./models/StudentSchema");


const app = express();
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://subramanyamchowdam7654:subbu1919@cluster1.0ybx9.mongodb.net/admin123?retryWrites=true&w=majority&appName=Cluster1')
.then(() => {
    console.log("database connected")
}).catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send("server running sucessfully")
});

app.get("/students", (req, res) => {
    student.find()
    .then(student => res.json(student))
    .catch(err => console.log(err))
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("server running at port 8000")
})
