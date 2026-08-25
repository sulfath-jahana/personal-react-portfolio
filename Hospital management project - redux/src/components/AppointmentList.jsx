import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteAppointment, addAppointment,
} from "../features/appointments/appointmentSlice";

function AppointmentList() {
  const dispatch = useDispatch();

  const appointments = useSelector(
    (state) => state.appointments.appointments
  );
useEffect(() => {
    fetch("http://localhost:3000/appointments")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((appointment) => {
          dispatch(addAppointment(appointment));
        });
      });
  }, [dispatch]);
const handleDelete = (id) => {
    fetch(
      `http://localhost:3000/appointments/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        dispatch(deleteAppointment(id));
      });
  };



  return (
    <div>
      <h2>Appointment List</h2>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment.id}>
            <p>
              Patient: {appointment.patientName}
            </p>

            <p>
              Doctor: {appointment.doctorName}
            </p>

            <p>
              Date: {appointment.date}
            </p>
            <p>
              <strong>Time:</strong>{" "}
              {appointment.time}
            </p>

            <p>
              <strong>Reason:</strong>{" "}
              {appointment.reason}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {appointment.status}
            </p>


            <button
              onClick={() =>
                handleDelete(
                  
                    appointment.id
                  
                )
              }
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default AppointmentList;