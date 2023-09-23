import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { IRandomClass, IStartClassForm } from "../../types/startClass";

export interface IClassProps extends IStartClassForm {}

export const getRandomClass = createAsyncThunk<
  IRandomClass,
  IClassProps,
  IThunkConfig<string>
>("startClass/getRandomClass", async (params, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IRandomClass>("/randomClass", {
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
