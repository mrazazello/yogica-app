import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileLoading test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: true
      }
    };
    expect(getProfileReadonly(state as IStateSchema)).toEqual(true);
  });
});
