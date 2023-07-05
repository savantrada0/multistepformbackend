const express = require("express");
const router = express.Router();

const Employee = require("../models/employee");

router.get("/getallemployees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addemployee", async (req, res) => {
  try {
    const newemployee = new Employee(req.body);
    await newemployee.save();
    res.send("Employee added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
