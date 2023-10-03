import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>("profile/fetchProfileData", async (_params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<IProfile>("/profile");

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err.message);
    throw err;
  }
});
