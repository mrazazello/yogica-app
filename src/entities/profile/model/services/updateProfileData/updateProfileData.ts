import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { IProfile, ProfileErrorsEnum } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<ProfileErrorsEnum[] | string>
>("profile/updateProfileData", async (_params, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());

  try {
    const response = await axios.put<IProfile>("/profile", formData);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err.message);
    throw err;
  }
});
