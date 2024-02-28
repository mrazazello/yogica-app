import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

// import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { IProfile, ProfileErrorsEnum } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  IProfile,
  IProfile,
  IThunkConfig<ProfileErrorsEnum[] | string>
>("profile/updateProfileData", async (params, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  // const formData = getProfileForm(getState());

  try {
    const response = await axios.put<IProfile>("/profile", params);

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
