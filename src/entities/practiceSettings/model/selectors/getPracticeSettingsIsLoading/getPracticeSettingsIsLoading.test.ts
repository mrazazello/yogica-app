import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getPracticeSettingsIsLoading } from "./getPracticeSettingsIsLoading";

describe("getPracticeSettingsIsLoading test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      settings: {
        isLoading: true
      }
    };
    expect(getPracticeSettingsIsLoading(state as IStateSchema)).toEqual(true);
  });
});
