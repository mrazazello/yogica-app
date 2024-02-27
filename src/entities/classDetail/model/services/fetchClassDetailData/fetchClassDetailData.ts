import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";
import { IClassDetail } from "../../types/class";

export const fetchClassDetailData = createAsyncThunk<
  IClassDetail,
  string,
  IThunkConfig<string>
>("classDetail/fetchClassDetailData", async (params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await axios.get<IClassDetail>(`/classDetail/${params}`);
    if (!response.data) {
      throw new Error("Thunk error");
    }
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
