import { createSlice}  from "@reduxjs/toolkit";



const appointmentSlice = createSlice(
    {
        name: "appointments",
        initialState: {
            appointments:[],
        },

        reducers: {
            addAppointment: (state, action) => {
              const exists = state.appointments.some(
        (appointment) =>
          appointment.id === action.payload.id
      );

      if (!exists) {
        state.appointments.push(action.payload);
      }
    },
   

            deleteAppointment: (state, action) => {
                state.appointments = state.appointments.filter(
                    (appointment) => appointment.id !== action.payload
                );
            },
        },
        }

    
);


export const { addAppointment, deleteAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;