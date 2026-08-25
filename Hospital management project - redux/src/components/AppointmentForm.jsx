import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addAppointment
} from "../features/appointments/appointmentSlice";

function AppointmentForm() {
  const dispatch = useDispatch();

  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("Scheduled");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      id: Date.now(),
      patientId: Number(patientId),
      patientName: patientName,
      doctorId: Number(doctorId),
      doctorName: doctorName,
      date: date,
      time: time,
      reason: reason,
      status: status,
    };

    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addAppointment(data));

        setPatientId("");
        setPatientName("");
        setDoctorId("");
        setDoctorName("");
        setDate("");
        setTime("");
        setReason("");
        setStatus("Scheduled");
      });
  };

  return (
    <div>
      <h2>Add Appointment</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient ID:</label>
          <input
            type="number"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Doctor ID:</label>
          <input
            type="number"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Doctor Name:</label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Time:</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="10:00 AM"
          />
        </div>

        <br />

        <div>
          <label>Reason:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Add Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;