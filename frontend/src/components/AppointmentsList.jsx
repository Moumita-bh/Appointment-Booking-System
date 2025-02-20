import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Container } from "@mui/material";
import moment from "moment";

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/appointments")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h2>Scheduled Appointments</h2>
      {appointments.map((appt) => (
        <Card key={appt._id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{appt.patientName}</Typography>
            <Typography variant="body2">Doctor: {appt.doctorId.name}</Typography>
            <Typography variant="body2">Date: {moment(appt.date).format("MMMM Do YYYY, h:mm A")}</Typography>
            <Typography variant="body2">Type: {appt.appointmentType}</Typography>
            <Typography variant="body2">Notes: {appt.notes}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default AppointmentsList;
