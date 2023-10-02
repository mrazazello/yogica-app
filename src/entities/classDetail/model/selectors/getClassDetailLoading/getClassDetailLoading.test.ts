import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getClassDetailLoading } from "./getClassDetailLoading";

describe("getClassDetailLoading test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      classDetail: {
        isLoading: true
      }
    };
    expect(getClassDetailLoading(state as IStateSchema)).toEqual(true);
  });
});
