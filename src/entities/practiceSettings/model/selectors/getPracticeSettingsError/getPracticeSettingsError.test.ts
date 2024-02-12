import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getPracticeSettingsError } from "./getPracticeSettingsError";

const testError = "Error message";

describe("getProfileError test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      settings: {
        errors: testError
      }
    };
    expect(getPracticeSettingsError(state as IStateSchema)).toEqual(testError);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      settings: {}
    };
    expect(getPracticeSettingsError(state as IStateSchema)).toEqual(undefined);
  });
});
