import { useDispatch, useSelector } from "react-redux";

import {
 addDoctor, deleteDoctor,
} from "../features/doctors/doctorSlice";
import { useEffect } from "react";

function DoctorList() {
  const dispatch = useDispatch();

  const doctors = useSelector(
    (state) => state.doctors.doctors
  );
  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((doctor) => {
          const alreadyExists = doctors.some(
          (item) => item.id === doctor.id
        );
         if (!alreadyExists) {
          dispatch(addDoctor(doctor));
        }
      });
    });
  }, [dispatch]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/doctors/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch(deleteDoctor(id));
      });
  };

  return (
    <div>
      <h2>Doctor List</h2>

      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        doctors.map((doctor) => (
          <div key={doctor.id}>
            <p>Name: {doctor.name}</p>

            <p>
              Specialization:{" "}
              {doctor.specialization}
            </p>

<p>
              <strong>Phone:</strong>{" "}
              {doctor.phone}
            </p>

            <button
              onClick={() =>
                handleDelete(doctor.id)
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

export default DoctorList;