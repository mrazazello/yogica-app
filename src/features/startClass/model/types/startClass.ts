import { LanguagesEnum } from "@entities/languages";
import { LevelsEnum } from "@entities/levels";
import { WorkoutTargetEnum } from "@entities/workoutTarget";

export interface IRequestClassParams {
  language: LanguagesEnum;
  difficultyLevel: LevelsEnum;
  workoutTarget: WorkoutTargetEnum;
  practicePreferredDuration: {
    asana: number;
    pranayama: number;
    chanting: number;
    meditation: number;
    shavasana: number;
  };
}

export interface IStartClassSchema {
  isLoading: boolean;
}

export interface IRandomClass {
  id: string;
}
