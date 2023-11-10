import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { IClassDetail } from "../../types/class";
import { getClassDetailData } from "./getClassDetailData";

const testData: IClassDetail = {
  id: "1",
  videoPreview: "some preview",
  streamUrl: "some stream",
  duration: "20",
  level: "zero",
  favorite: true,
  exercises: []
};

describe("getClassDetailData test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      classDetail: {
        data: testData
      }
    };
    expect(getClassDetailData(state as IStateSchema)).toEqual(testData);
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      classDetail: {}
    };
    expect(getClassDetailData(state as IStateSchema)).toEqual(undefined);
  });
});
