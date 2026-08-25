import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctors",

  initialState: {
    doctors: [],
  },

  reducers: {
    addDoctor: (state, action) => {
      const exists = state.doctors.some(
        (doctor) => doctor.id === action.payload.id
      );

      if (!exists) {
        state.doctors.push(action.payload);
      }
    },

    deleteDoctor: (state, action) => {
      state.doctors = state.doctors.filter(
        (doctor) => doctor.id !== action.payload
      );
    },
  },
});

export const {
  addDoctor,
  deleteDoctor,
} = doctorSlice.actions;

export default doctorSlice.reducer;