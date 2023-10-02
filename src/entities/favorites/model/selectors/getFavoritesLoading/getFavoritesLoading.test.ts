import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getFavoritesLoading } from "./getFavoritesLoading";

describe("getClassDetailLoading test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      favorites: {
        isLoading: true
      }
    };
    expect(getFavoritesLoading(state as IStateSchema)).toEqual(true);
  });
});
