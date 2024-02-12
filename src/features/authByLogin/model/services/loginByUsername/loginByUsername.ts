import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";
import { IUser, userActions } from "@entities/user";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import { validateLoginData } from "../validateLoginData/validateLoginData";

export interface ILoginProps {
  username: string;
  password: string;
}

export const loginUserByName = createAsyncThunk<
  IUser,
  ILoginProps,
  IThunkConfig<string[]>
>("login/loginUserByName", async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  const err = validateLoginData(authData);
  if (err.length) {
    return rejectWithValue(err);
  }

  try {
    const response = await axios.post<IUser>("/auth/email", authData);
    if (!response.data) {
      throw new Error("Thunk error");
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue([err.message]);
    throw err;
  }
});
