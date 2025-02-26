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

//GET request
app.get("/students", (req, res) => {
    student.find()
    .then(student => res.json(student))
    .catch(err => console.log(err))
})

//post request
app.post("/post", (req, res) => {
    const {name, group} = req.body;

    //create new user 
    const newStudent = new student({
      name:name,
      group: group

    })

    //save the new user to database
    newStudent.save()
    .then(() => res.status(201).json({message: "user added sucessfully"}))
    .catch( err => res.status(400).json("fetching error" + err))
})

//Delete request
app.delete("/delete", (req, res) => {
    const {id} = req.params;
    student.findByIdAndDelete("67bd430fb10f5748bac81c04")
    .then(() => res.status(201).json({message: "user deleted successfully"}))
    .catch(err => res.status(400).json("error while deleting" + err))
})

//update method
app.put("/update", (req, res) => {
    
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("server running at port 8000")
})
