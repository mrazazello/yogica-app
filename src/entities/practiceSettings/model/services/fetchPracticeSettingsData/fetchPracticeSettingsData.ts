import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";
import { IPracticeSettings } from "../../types/practiceSettings";

export const fetchPracticeSettingsData = createAsyncThunk<
  IPracticeSettings,
  void,
  IThunkConfig<string>
>("practiceSettings/fetchPracticeSettingsData", async (_params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<IPracticeSettings>(
      "/my/practice-settings"
    );

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err.message);
    throw err;
  }
});
