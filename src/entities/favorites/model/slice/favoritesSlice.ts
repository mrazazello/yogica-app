import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchFavoritesData } from "../services/fetchFavoritesData/fetchFavoritesData";
import { IFavorite, IFavoritesSchema } from "../types/favoretes";

const initialState: IFavoritesSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchFavoritesData.fulfilled,
        (state, action: PayloadAction<IFavorite[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchFavoritesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: favoritesActions } = favoritesSlice;
export const { reducer: favoritesReducer } = favoritesSlice;
