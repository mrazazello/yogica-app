import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUserByName } from "../services/loginByUsername/loginByUsername";
import { ILoginSchema } from "../types/login";

const initialState: ILoginSchema = {
  form: {
    username: "",
    password: ""
  },
  isLoading: false
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.form.username = action.payload;
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.form.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserByName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginUserByName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUserByName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
