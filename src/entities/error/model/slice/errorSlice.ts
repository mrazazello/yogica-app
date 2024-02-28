import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isThunkActionError } from "@shared/lib/sliceUtils/sliceUtils";
import { IError, IErrorSchema } from "../types/error";

const initialState: IErrorSchema = {
  errors: []
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    pushError: (state, action: PayloadAction<IError>) => {
      state.errors.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isThunkActionError,
      (state, action: PayloadAction<IError>) => {
        if (action.payload) {
          state.errors.push(action.payload);
          if (state.errors.length > 3) state.errors.shift();
        }
      }
    );
  }
});

export const { actions: errorsActions } = errorsSlice;
export const { reducer: errorsReducer } = errorsSlice;
