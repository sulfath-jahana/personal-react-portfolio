import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside>
      <h3>Menu</h3>

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
    </aside>
  );
}

export default Sidebar;