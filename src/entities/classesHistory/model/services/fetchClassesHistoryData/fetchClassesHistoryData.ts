import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { IClassesHistory } from "../../types/classesHistory";

export const fetchClassesHistoryData = createAsyncThunk<
  IClassesHistory[],
  void,
  IThunkConfig<string>
>("classesHistory/fetchClassesHistoryData", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<IClassesHistory[]>("/classesHistory");
    if (!response.data) {
      throw new Error("Thunk error");
    }
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
