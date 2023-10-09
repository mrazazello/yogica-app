import { IStateSchema } from "@app/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getClassDetailData } from "./getClassDetailData";

const testData = {
  id: "1",
  videoPreview: "some preview",
  streamUrl: "some stream",
  duration: "20",
  level: "zero",
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
