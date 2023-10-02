import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";

import { ILoginData } from "../../types/login";
import { getLoginPassword } from "./getLoginPassword";

const testFormData: ILoginData = {
  username: "aza",
  password: "Volkov"
};

describe("getLoginPassword test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        form: testFormData
      }
    };
    expect(getLoginPassword(state as IStateSchema)).toEqual(
      testFormData.password
    );
  });
  test("empty selector shoud return epty string", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {}
    };
    expect(getLoginPassword(state as IStateSchema)).toEqual("");
  });
});
