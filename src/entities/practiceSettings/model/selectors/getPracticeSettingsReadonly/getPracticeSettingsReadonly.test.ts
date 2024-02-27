import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getPracticeSettingsReadonly } from "./getPracticeSettingsReadonly";

describe("getPracticeSettingsReadonly test", () => {
  test("selector shoud return true", () => {
    const state: DeepPartial<IStateSchema> = {
      settings: {
        readonly: true
      }
    };
    expect(getPracticeSettingsReadonly(state as IStateSchema)).toEqual(true);
  });
});
