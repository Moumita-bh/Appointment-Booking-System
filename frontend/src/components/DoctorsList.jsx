import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Container } from "@mui/material";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h2>Available Doctors</h2>
      {doctors.map((doc) => (
        <Card key={doc._id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{doc.name}</Typography>
            <Typography variant="body2">
              Working Hours: {doc.workingHours.start} - {doc.workingHours.end}
            </Typography>
            <Button variant="contained" href={`/appointments?doctorId=${doc._id}`} sx={{ marginTop: 1 }}>
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default DoctorsList;
