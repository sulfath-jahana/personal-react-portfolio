import { createSlice}  from "@reduxjs/toolkit";

const initialState = {
    patients: [],

};

const patientSlice = createSlice(
    {
        name: "patients",
        initialState,
        reducers: {
            addPatient: (state, action) => {
                const exists = state.patients.some(
        (patient) => patient.id === action.payload.id
      );

      if (!exists) {
        state.patients.push(action.payload);
      }
    },

            deletePatient: (state, action) => {
                state.patients = state.patients.filter(
                    (patient) => patient.id !== action.payload
                );
            },
        },
        }

    
);


export const { addPatient, deletePatient } = patientSlice.actions;
export default patientSlice.reducer;