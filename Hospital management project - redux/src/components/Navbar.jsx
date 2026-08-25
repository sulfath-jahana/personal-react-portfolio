import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <h2>Hospital Management System</h2>

      <button onClick={() => navigate("/")}>
        Dashboard
      </button>

      <button
        onClick={() => navigate("/patients")}
      >
        Patients
      </button>

      <button
        onClick={() => navigate("/doctors")}
      >
        Doctors
      </button>

      <button
        onClick={() => navigate("/appointments")}
      >
        Appointments
      </button>
    </nav>
  );
}

export default Navbar;