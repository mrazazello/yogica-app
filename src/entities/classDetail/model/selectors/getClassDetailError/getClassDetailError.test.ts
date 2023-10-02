import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getClassDetailError } from "./getClassDetailError";

const testError = "Error message";

describe("getClassDetailError test", () => {
  test("selector shoud return an error", () => {
    const state: DeepPartial<IStateSchema> = {
      classDetail: {
        error: testError
      }
    };
    expect(getClassDetailError(state as IStateSchema)).toEqual(testError);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      classDetail: {}
    };
    expect(getClassDetailError(state as IStateSchema)).toEqual(undefined);
  });
});
