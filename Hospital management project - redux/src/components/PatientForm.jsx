import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPatient,deletePatient } from "../features/patients/patientSlice";

function PatientForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const patient = {
      id: Date.now(),
      name,
      age,
      gender,
      disease,
    };

    dispatch(addPatient(patient));

    setName("");
    setAge("");
    setGender("");
    setDisease("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="text"
        placeholder="Disease"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
      />

      <button type="submit">
        Add Patient
      </button>
    </form>
  );
}

export default PatientForm;