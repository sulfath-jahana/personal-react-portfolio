import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../features/patients/patientSlice";
import doctorReducer from "../features/doctors/doctorSlice";
import appointmentReducer from "../features/appointments/appointmentSlice";

const store = configureStore(
    {
        reducer : {
            patients: patientReducer,
            doctors: doctorReducer,
            appointments: appointmentReducer,
        },
        });

    

        export default store;
