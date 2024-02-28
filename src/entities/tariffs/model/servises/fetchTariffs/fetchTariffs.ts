import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { ITariff } from "../../types/tariff";

export const fetchTariffs = createAsyncThunk<
  ITariff[],
  void,
  IThunkConfig<string>
>("tariffs/fetchTariffs", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await axios.get<ITariff[]>(`/tariffs/`);

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
