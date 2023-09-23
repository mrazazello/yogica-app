import {
  IStartClassForm,
  IStartClassSchema
} from "@features/startClass/model/types/startClass";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRandomClass } from "../services/getRandomClass/getRandomClass";

const initialState: IStartClassSchema = {
  isLoading: false
};

export const startClassSlice = createSlice({
  name: "startClass",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<IStartClassForm>) => {
      state.form = {
        ...state.form,
        ...action.payload
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomClass.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getRandomClass.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getRandomClass.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: startClassActions } = startClassSlice;
export const { reducer: startClassReducer } = startClassSlice;
