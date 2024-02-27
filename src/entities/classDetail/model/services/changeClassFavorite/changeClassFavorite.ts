import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { getClassDetailData } from "../../selectors/getClassDetailData/getClassDetailData";
import { IClassDetail } from "../../types/class";

export const changeClassFavorite = createAsyncThunk<
  IClassDetail,
  string,
  IThunkConfig<string>
>("classDetail/changeClassFavorite", async (classId, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  const classDetail = getClassDetailData(getState());

  if (!classDetail) {
    return rejectWithValue("no class detail");
  }

  const toAddAction = !classDetail?.favorite;

  try {
    const response = await axios.put<IClassDetail>(`/classDetail/${classId}`, {
      ...classDetail,
      favorite: toAddAction
    });

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
