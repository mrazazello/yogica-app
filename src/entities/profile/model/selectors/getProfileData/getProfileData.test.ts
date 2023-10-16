import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { IProfile } from "../../types/profile";
import { getProfileData } from "./getProfileData";

const testProfile: IProfile = {
  firstName: "Konstantin",
  lastName: "Volkov",
  params: {
    level: "zero",
    exercise: "10",
    chanting: "20",
    breathing: "30",
    relaxation: "40"
  }
};

describe("getProfileForm test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: testProfile
      }
    };
    expect(getProfileData(state as IStateSchema)).toEqual(testProfile);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {}
    };
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
