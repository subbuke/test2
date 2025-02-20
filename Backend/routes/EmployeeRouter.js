const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/EmployeeControler");
const Employee = require("../models/Employee");

router.post('/add-emp', employeeController.createEmployee);

module.exports = router;