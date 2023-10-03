import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { IThunkConfig } from "@app/storeProvider";

import { IFavorite } from "../../types/favoretes";

export const fetchFavoritesData = createAsyncThunk<
  IFavorite[],
  void,
  IThunkConfig<string>
>("startClass/fetchFavoritesData", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<IFavorite[]>("/favorites");
    if (!response.data) {
      throw new Error("Thunk error");
    }
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err.message);
    throw err;
  }
});
