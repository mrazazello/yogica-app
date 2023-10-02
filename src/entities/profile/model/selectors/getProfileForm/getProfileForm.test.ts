import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { IProfile } from "../../types/profile";
import { getProfileForm } from "./getProfileForm";

const testProfile: IProfile = {
  firstName: "Konstantin",
  lastName: "Volkov"
};

describe("getProfileForm test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        form: testProfile
      }
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(testProfile);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {}
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
  });
});
