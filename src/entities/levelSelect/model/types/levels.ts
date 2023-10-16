export enum LevelsEnum {
  ZERO = "zero",
  BEGINNER = "beginner",
  MIDDLE = "middle"
}

export interface ILevels {
  title: string;
  description: string;
}

export const LevelsEnumValues: Record<LevelsEnum, ILevels> = {
  [LevelsEnum.ZERO]: {
    title: "Zero",
    description: "This is my first yoga lecture in my life"
  },
  [LevelsEnum.BEGINNER]: {
    title: "Beginner",
    description: "I have exprience in several classes"
  },
  [LevelsEnum.MIDDLE]: {
    title: "Middle",
    description: "I am confident in the class"
  }
};

export interface ILevelsSchema {
  level?: string;
  isLoading: boolean;
  error?: string;
}
