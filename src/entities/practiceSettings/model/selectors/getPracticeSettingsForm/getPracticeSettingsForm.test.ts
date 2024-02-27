import { IStateSchema } from "@app/storeProvider";
import { LanguagesEnum } from "@entities/languages";
import { LevelsEnum } from "@entities/levels";
import { WorkoutTargetEnum } from "@entities/workoutTarget";
import { DeepPartial } from "@reduxjs/toolkit";
import { IPracticeSettings } from "../../types/practiceSettings";
import { getPracticeSettingsForm } from "./getPracticeSettingsForm";

const testSettings: IPracticeSettings = {
  language: LanguagesEnum.EN,
  difficultyLevel: LevelsEnum.MIDDLE,
  workoutTarget: WorkoutTargetEnum.HEALTH,
  preferredDuration: {
    asana: 100,
    chanting: 120,
    pranayama: 140,
    meditation: 160,
    shavasana: 180
  }
};

describe("getProfileForm test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      settings: {
        form: testSettings
      }
    };
    expect(getPracticeSettingsForm(state as IStateSchema)).toEqual(
      testSettings
    );
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      settings: {}
    };
    expect(getPracticeSettingsForm(state as IStateSchema)).toEqual(undefined);
  });
});
