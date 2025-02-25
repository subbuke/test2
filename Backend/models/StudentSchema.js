const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    group:{
        type:String,
        required: true
    }
})

const student = mongoose.model("student", studentSchema);

module.exports = student;