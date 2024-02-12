import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import { IUser, IUserSchema } from "../types/user";
import { refreshToken } from "../services/refreshToken/refreshToken";

const initialState: IUserSchema = {
  isLoading: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshToken.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
