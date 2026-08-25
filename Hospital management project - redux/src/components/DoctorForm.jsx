import { useState } from "react";
import { useDispatch } from "react-redux";

import { addDoctor } from "../features/doctors/doctorSlice";

function DoctorForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [specialization, setSpecialization] =
    useState("");
    const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const doctor = {
      name: name,
      specialization: specialization,
      phone: phone,
    };
fetch("http://localhost:3000/doctors", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(doctor),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addDoctor(data));
      });

    setName("");
    setSpecialization("");
    setPhone("");
  };
    

  return (
    <div>
        <h2> Add Doctor</h2>
    
    <form onSubmit={handleSubmit}>
      

      <input
        type="text"
        placeholder="Doctor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) =>
          setSpecialization(e.target.value)
        }
      />
       <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />


      <button type="submit">
        Add Doctor
      </button>
    </form>
    </div>
  );
}

export default DoctorForm;