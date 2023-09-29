export enum LevelsEnum {
  ZERO = "zero",
  BEGINNER = "beginner",
  MIDDLE = "middle"
}

type ILevels = Record<LevelsEnum, string>;

export const LevelsEnumValues: ILevels = {
  [LevelsEnum.ZERO]: "Zero",
  [LevelsEnum.BEGINNER]: "Beginner",
  [LevelsEnum.MIDDLE]: "Middle"
};
