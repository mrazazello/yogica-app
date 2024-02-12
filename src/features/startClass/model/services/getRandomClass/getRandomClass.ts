import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { IRandomClass, IRequestClassParams } from "../../types/startClass";

export const getRandomClass = createAsyncThunk<
  IRandomClass,
  IRequestClassParams,
  IThunkConfig<string>
>("startClass/getRandomClass", async (params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await axios.put<IRandomClass>("/my/workouts", {
      params
    });

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err.message);
    throw err;
  }
});
