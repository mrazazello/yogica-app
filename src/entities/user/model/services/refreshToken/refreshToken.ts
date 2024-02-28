import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";
import { axiosWithCredentials } from "@shared/api/api";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import { userActions } from "../../slice/userSlice";
import { IUser } from "../../types/user";

export const refreshToken = createAsyncThunk<IUser, void, IThunkConfig<string>>(
  "user/refreshToken",
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await axiosWithCredentials.post<IUser>("/auth/refresh");

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      if (err instanceof AxiosError)
        return rejectWithValue(err?.response?.data);
      throw err;
    }
  }
);
