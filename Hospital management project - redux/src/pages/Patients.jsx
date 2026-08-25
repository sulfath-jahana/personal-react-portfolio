import PatientForm from "../components/PatientForm";
import PatientList from "../components/PatientList";

function Patients() {
  return (
    <div>
      <h1>Patient Management</h1>

      <PatientForm />

      <PatientList />
    </div>
  );
}

export default Patients;