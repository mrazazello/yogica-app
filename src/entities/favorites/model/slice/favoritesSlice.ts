import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from "@reduxjs/toolkit";

import { IStateSchema } from "@app/storeProvider";
import { fetchFavoritesData } from "../services/fetchFavoritesData/fetchFavoritesData";
import { IFavoriteItem, IFavoritesSchema } from "../types/favoretes";

const initialState: IFavoritesSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  ids: [],
  entities: {}
};

const favoritesAdapter = createEntityAdapter<IFavoriteItem>();

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState:
    favoritesAdapter.getInitialState<IFavoritesSchema>(initialState),
  reducers: {
    removeItem: (state, action: PayloadAction<string>) => {
      favoritesAdapter.removeOne(state, action.payload);
    },
    addItem: (state, action: PayloadAction<IFavoriteItem>) => {
      favoritesAdapter.addOne(state, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchFavoritesData.fulfilled,
        (state, action: PayloadAction<IFavoriteItem[]>) => {
          state.isLoading = false;
          favoritesAdapter.setAll(state, action.payload);
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
export const getFavoritesEntities = favoritesAdapter.getSelectors<IStateSchema>(
  (state) => state.favorites
);
