import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchTariffs } from "../servises/fetchTariffs/fetchTariffs";
import { ITariff, ITariffsSchema } from "../types/tariff";

const initialState: ITariffsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const tariffsSlice = createSlice({
  name: "tariffs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTariffs.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchTariffs.fulfilled,
        (state, action: PayloadAction<ITariff[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchTariffs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: tariffsActions } = tariffsSlice;
export const { reducer: tariffsReducer } = tariffsSlice;
