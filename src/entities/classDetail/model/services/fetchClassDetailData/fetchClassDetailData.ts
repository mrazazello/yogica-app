import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";
import { IClassDetail } from "../../types/class";

export const fetchClassDetailData = createAsyncThunk<
  IClassDetail,
  string,
  IThunkConfig<string>
>("classDetail/fetchClassDetailData", async (params, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IClassDetail>("/classDetail", {
      params: { id: params }
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