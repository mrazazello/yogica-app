import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@app/storeProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>("profile/fetchProfileData", async (_params, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<IProfile>("/profile");

    if (!response.data) {
      throw new Error("Thunk error");
    }

    // dispatch(profileActions.setProfileData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("Error geting profile");
  }
});
