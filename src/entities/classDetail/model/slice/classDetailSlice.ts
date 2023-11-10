import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchClassDetailData } from "../services/fetchClassDetailData/fetchClassDetailData";
import { IClassDetail, IClassDetailSchema } from "../types/class";
import { changeClassFavorite } from "../services/changeClassFavorite/changeClassFavorite";

const initialState: IClassDetailSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const classDetailSlice = createSlice({
  name: "classDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassDetailData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchClassDetailData.fulfilled,
        (state, action: PayloadAction<IClassDetail>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchClassDetailData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeClassFavorite.pending, (state) => {
        state.error = undefined;
      })
      .addCase(
        changeClassFavorite.fulfilled,
        (state, action: PayloadAction<IClassDetail>) => {
          state.data = action.payload;
        }
      )
      .addCase(changeClassFavorite.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { actions: classDetailActions } = classDetailSlice;
export const { reducer: classDetailReducer } = classDetailSlice;
