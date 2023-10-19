import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getProfileError } from "./getProfileError";

const testError = "Error message";

describe("getProfileError test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        errors: testError
      }
    };
    expect(getProfileError(state as IStateSchema)).toEqual(testError);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {}
    };
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
