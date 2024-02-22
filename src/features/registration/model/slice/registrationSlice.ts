import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { registrationByEmail } from "../services/registrationByEmail/registrationByEmail";
import { IRegistrationSchema } from "../types/registration";

const initialState: IRegistrationSchema = {
  form: {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  },
  isLoading: false
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.form.email = action.payload;
    },
    setUserFirstName: (state, action: PayloadAction<string>) => {
      state.form.firstName = action.payload;
    },
    setUserLastName: (state, action: PayloadAction<string>) => {
      state.form.lastName = action.payload;
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.form.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationByEmail.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registrationByEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registrationByEmail.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = [action.payload];
        }
      });
  }
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
