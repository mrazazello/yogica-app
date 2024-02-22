import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@app/storeProvider";
import { IUser, userActions } from "@entities/user";
import { unInterceptedAxios } from "@shared/api/api";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import { AxiosError } from "axios";
// import { validateLoginData } from "../validateLoginData/validateLoginData";
import { IError } from "@entities/error";

export interface ILoginProps {
  username: string;
  password: string;
}

export const loginUserByName = createAsyncThunk<
  IUser,
  ILoginProps,
  IThunkConfig<IError>
>("login/loginUserByName", async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // const err = validateLoginData(authData);
  // if (err.length) {
  //   return rejectWithValue(err);
  // }

  try {
    const response = await unInterceptedAxios.post<IUser>(
      "/auth/email",
      authData
    );

    if (!response.data) {
      throw new Error("Thunk error");
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (err) {
    console.log("catch err: ", err);
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
