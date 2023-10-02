import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";

import { ILoginData } from "../../types/login";
import { getLoginUsername } from "./getLoginUsername";

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
    expect(getLoginUsername(state as IStateSchema)).toEqual(
      testFormData.username
    );
  });
  test("empty selector shoud return epty string", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {}
    };
    expect(getLoginUsername(state as IStateSchema)).toEqual("");
  });
});
