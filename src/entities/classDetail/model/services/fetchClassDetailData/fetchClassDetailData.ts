import { createAsyncThunk } from "@reduxjs/toolkit";

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

    // dispatch(profileActions.setProfileData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("Error geting classDetail");
  }
});
