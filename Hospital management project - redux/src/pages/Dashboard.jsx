import { useSelector } from "react-redux";

function Dashboard() {
  const patients = useSelector(
    (state) => state.patients.patients
  );

  const doctors = useSelector(
    (state) => state.doctors.doctors
  );

  const appointments = useSelector(
    (state) => state.appointments.appointments
  );

  return (
    <div>
      <h1>Hospital Dashboard</h1>

      <h3>
        Total Patients: {patients.length}
      </h3>

      <h3>
        Total Doctors: {doctors.length}
      </h3>

      <h3>
        Total Appointments:{" "}
        {appointments.length}
      </h3>
    </div>
  );
}

export default Dashboard;