import { LanguagesEnum } from "@entities/languages";
import { LevelsEnum } from "@entities/levels";
import { WorkoutTargetEnum } from "@entities/workoutTarget";

export interface IPracticeSettings {
  language: LanguagesEnum;
  difficultyLevel: LevelsEnum;
  workoutTarget: WorkoutTargetEnum;
  preferredDuration: {
    asana: number;
    chanting: number;
    pranayama: number;
    meditation: number;
    shavasana: number;
  };
}

export interface IPracticeSettingsSchema {
  data?: IPracticeSettings;
  form?: IPracticeSettings;
  isLoading: boolean;
  readonly: boolean;
}
