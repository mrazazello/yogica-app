import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { IFavorite } from "../../types/favoretes";
import { getFavoritesData } from "./getFavoritesData";

const testData: IFavorite[] = [
  {
    id: "",
    duration: "string",
    level: "string",
    videoPreview: "string"
  }
];

describe("getFavoritesData test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      favorites: {
        data: testData
      }
    };
    expect(getFavoritesData(state as IStateSchema)).toEqual(testData);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      favorites: {}
    };
    expect(getFavoritesData(state as IStateSchema)).toEqual(undefined);
  });
});
