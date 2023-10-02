import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";

import { IUser } from "../../types/user";
import { getUserAuthData } from "./getUserAuthData";

const testUser: IUser = {
  id: "1",
  username: "aza",
  firstName: "Konstantin",
  lastName: "Volkov"
};

describe("getUserAuthData test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      user: {
        authData: testUser
      }
    };
    expect(getUserAuthData(state as IStateSchema)).toEqual(testUser);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      user: {}
    };
    expect(getUserAuthData(state as IStateSchema)).toEqual(undefined);
  });
});
