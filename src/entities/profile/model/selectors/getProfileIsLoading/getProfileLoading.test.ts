import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileLoading test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: true
      }
    };
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(true);
  });
});
