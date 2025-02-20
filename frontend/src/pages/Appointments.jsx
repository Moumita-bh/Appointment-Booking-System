import { useLocation } from "react-router-dom";
import BookAppointment from "../components/BookAppointment";
import AppointmentsList from "../components/AppointmentsList";

const Appointments = () => {
  const query = new URLSearchParams(useLocation().search);
  const doctorId = query.get("doctorId");

  return (
    <div>
      {doctorId ? <BookAppointment doctorId={doctorId} /> : <AppointmentsList />}
    </div>
  );
};

export default Appointments;
