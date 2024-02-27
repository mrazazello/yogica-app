import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchPracticeSettingsData } from "../services/fetchPracticeSettingsData/fetchPracticeSettingsData";
import { updatePracticeSettingsData } from "../services/updatePracticeSettingsData/updatePracticeSettingsData";
import {
  IPracticeSettings,
  IPracticeSettingsSchema
} from "../types/practiceSettings";

const initialState: IPracticeSettingsSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  form: undefined
};

export const practiceSettingsSlice = createSlice({
  name: "practiceSettings",
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updatePracticeSettings: (
      state,
      action: PayloadAction<IPracticeSettings>
    ) => {
      state.form = {
        ...state.form,
        ...action.payload
      };
    },
    cancelEditProfile: (state) => {
      state.readonly = true;
      state.form = state.data;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPracticeSettingsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPracticeSettingsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchPracticeSettingsData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePracticeSettingsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePracticeSettingsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(updatePracticeSettingsData.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const { actions: practiceSettingsActions } = practiceSettingsSlice;
export const { reducer: practiceSettingsReducer } = practiceSettingsSlice;
