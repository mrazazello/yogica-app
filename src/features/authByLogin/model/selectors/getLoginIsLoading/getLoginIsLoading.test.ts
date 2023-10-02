import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginFormLoading test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: true
      }
    };
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
  });
});
