import DoctorsList from "../components/DoctorsList";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginY: 2 }}>Welcome to Babysteps Appointment System</Typography>
      <DoctorsList />
    </Container>
  );
};

export default Home;
