import { LanguagesEnum } from "@entities/languages";
import { LevelsEnum } from "@entities/levels";
import { WorkoutTargetEnum } from "@entities/workoutTarget";

export interface IRequestClassParams {
  language: LanguagesEnum;
  difficultyLevel: LevelsEnum;
  workoutTarget: WorkoutTargetEnum;
  preferredDuration: {
    asana: number;
    pranayama: number;
    chanting: number;
    meditation: number;
    shavasana: number;
  };
}

export interface IStartClassSchema {
  isLoading: boolean;
  error?: string;
}

export interface IRandomClass {
  id: string;
}
