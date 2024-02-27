import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@app/storeProvider";
import { IError } from "@entities/error";
import { unInterceptedAxios } from "@shared/api/api";
import { AxiosError } from "axios";
import { getRegistrationData } from "../../selectors/getRegistrationData/getRegistrationData";
// import { validateRegData } from "../validateRegData/validateRegData";

export const registrationByEmail = createAsyncThunk<
  any,
  void,
  IThunkConfig<IError>
>("registration/registrationByEmail", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const regData = getRegistrationData(getState());

  // const err = validateRegData(regData);
  // if (err.length) {
  //   return rejectWithValue(err);
  // }

  try {
    const response = await unInterceptedAxios.post(
      "/registration/email",
      regData
    );
    console.log("response: ", response);

    // return response.data;
  } catch (err) {
    if (err instanceof AxiosError) return rejectWithValue(err?.response?.data);
    throw err;
  }
});
