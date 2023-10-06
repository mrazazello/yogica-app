import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchClassesHistoryData } from "../services/fetchClassesHistoryData/fetchClassesHistoryData";
import {
  IClassesHistory,
  IClassesHistorySchema
} from "../types/classesHistory";

const initialState: IClassesHistorySchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const classesHistorySlice = createSlice({
  name: "classesHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassesHistoryData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchClassesHistoryData.fulfilled,
        (state, action: PayloadAction<IClassesHistory[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchClassesHistoryData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: classesHistoryActions } = classesHistorySlice;
export const { reducer: classesHistoryReducer } = classesHistorySlice;
