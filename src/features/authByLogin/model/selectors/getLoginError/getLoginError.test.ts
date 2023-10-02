import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginError } from "./getLoginError";

const testError = ["Error message"];

describe("getLoginError test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: testError
      }
    };
    expect(getLoginError(state as IStateSchema)).toEqual(testError);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {}
    };
    expect(getLoginError(state as IStateSchema)).toEqual(undefined);
  });
});
