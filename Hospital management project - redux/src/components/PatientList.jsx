import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPatient,
    deletePatient} from "../features/patients/patientSlice";



    function PatientList()
        {
            const dispatch = useDispatch();

            const patients = useSelector(
                (state) => state.patients.patients
            
            );
             useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((patient) => {
          dispatch(addPatient(patient));
        });
      });
  }, [dispatch]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/patients/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        dispatch(deletePatient(id));
      });
  };

            return (
                <div>
                <h2>Patient List</h2>
                {patients.length ===0 ? (
                    <p>No patients found.</p>
                ) : (
                    patients.map((patient) => (
          <div key={patient.id}>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Disease: {patient.disease}</p>

            <button
              onClick={() =>
                handleDelete(patient.id)}
              
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

export default PatientList;
                

        
                
                
                
                
                
                