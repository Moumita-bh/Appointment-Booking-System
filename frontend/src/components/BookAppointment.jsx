import { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, MenuItem, Typography } from "@mui/material";

const BookAppointment = ({ doctorId }) => {
  const [date, setDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [duration, setDuration] = useState(30);
  const [notes, setNotes] = useState("");

  const handleBooking = async () => {
    try {
      await axios.post("http://localhost:5000/appointments", {
        doctorId,
        date,
        duration,
        appointmentType: "Routine Check-Up",
        patientName,
        notes,
      });
      alert("Appointment booked successfully!");
    } catch (error) {
      alert("Failed to book appointment.");
    }
  };

  return (
    <Container>
      <Typography variant="h5">Book an Appointment</Typography>
      <TextField fullWidth label="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} sx={{ marginY: 1 }} />
      <TextField fullWidth type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} sx={{ marginY: 1 }} />
      <TextField select fullWidth label="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} sx={{ marginY: 1 }}>
        <MenuItem value={30}>30 Minutes</MenuItem>
        <MenuItem value={60}>60 Minutes</MenuItem>
      </TextField>
      <TextField fullWidth label="Notes" multiline rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} sx={{ marginY: 1 }} />
      <Button variant="contained" onClick={handleBooking}>Book Appointment</Button>
    </Container>
  );
};

export default BookAppointment;
