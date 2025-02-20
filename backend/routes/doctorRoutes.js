const express = require("express");
const Doctor = require("../models/doctorModel");
const router = express.Router();

// @route GET /doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /doctors (Add a new doctor)
router.post("/", async (req, res) => {
  const { name, specialty, workingHours } = req.body;
  try {
    const newDoctor = new Doctor({ name, specialty, workingHours });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ message: "Error adding doctor" });
  }
});

module.exports = router;
