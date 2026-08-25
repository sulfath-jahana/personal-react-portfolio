import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

function Appointments() {
  return (
    <div>
      <h1>Appointment Management</h1>

      <AppointmentForm />

      <AppointmentList />
    </div>
  );
}

export default Appointments;