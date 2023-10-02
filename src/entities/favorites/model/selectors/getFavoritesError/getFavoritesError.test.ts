import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getFavoritesError } from "./getFavoritesError";

const testError = "Error message";

describe("test favorite state error", () => {
  test("state shoud return an error", () => {
    const state: DeepPartial<IStateSchema> = {
      favorites: {
        error: testError
      }
    };
    expect(getFavoritesError(state as IStateSchema)).toEqual(testError);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      favorites: {}
    };
    expect(getFavoritesError(state as IStateSchema)).toEqual(undefined);
  });
});
