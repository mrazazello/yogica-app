import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { IPracticeSettings } from "../../types/practiceSettings";

export const updatePracticeSettingsData = createAsyncThunk<
  IPracticeSettings,
  IPracticeSettings,
  IThunkConfig<string>
>("practiceSettings/updatePracticeSettingsData", async (params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await axios.put<IPracticeSettings>("/profile", params);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
