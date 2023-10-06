import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchPaymentsData } from "../services/fetchPaymentsData/fetchPaymentsData";
import { IPayments, IPaymentsSchema } from "../types/payments";

const initialState: IPaymentsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const paymentsSlice = createSlice({
  name: "paymnets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaymentsData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchPaymentsData.fulfilled,
        (state, action: PayloadAction<IPayments[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchPaymentsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: paymentsActions } = paymentsSlice;
export const { reducer: paymentsReducer } = paymentsSlice;
