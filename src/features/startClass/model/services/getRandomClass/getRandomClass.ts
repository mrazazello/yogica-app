import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@app/storeProvider/config/stateSchema";

import { IClass, IStartClassForm } from "../../../types/startClass";

export interface IClassProps extends IStartClassForm {}

export const getRandomClass = createAsyncThunk<
  IClass,
  IClassProps,
  IThunkConfig<string>
>("startClass/getRandomClass", async (_params, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IClass>("/randomClass");

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("Generate class error");
  }
});
