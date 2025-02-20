const express = require("express");
const Appointment = require("../models/appointmentModel");
const Doctor = require("../models/doctorModel");
const router = express.Router();

// @route GET /appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId", "name");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /appointments (Book a new appointment)
router.post("/", async (req, res) => {
  const { doctorId, patientName, date, duration, appointmentType, notes } = req.body;
  
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    const newAppointment = new Appointment({
      doctorId,
      patientName,
      date,
      duration,
      appointmentType,
      notes,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: "Error booking appointment" });
  }
});

module.exports = router;
