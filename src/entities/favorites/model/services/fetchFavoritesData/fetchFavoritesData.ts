import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { IFavoriteItem } from "../../types/favoretes";

export const fetchFavoritesData = createAsyncThunk<
  IFavoriteItem[],
  void,
  IThunkConfig<string>
>("startClass/fetchFavoritesData", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<IFavoriteItem[]>("/favorites");

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError && err?.response?.data) {
      console.log("instance?");
      return rejectWithValue(err.response.data);
    }
    throw err;
  }
});
