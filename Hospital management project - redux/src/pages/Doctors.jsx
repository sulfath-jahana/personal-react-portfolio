import DoctorForm from "../components/DoctorForm";
import DoctorList from "../components/DoctorList";

function Doctors() {
  return (
    <div>
      <h1>Doctor Management</h1>

      <DoctorForm />

      <DoctorList />
    </div>
  );
}

export default Doctors;