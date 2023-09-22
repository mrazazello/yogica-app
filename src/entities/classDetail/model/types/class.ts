import { IExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";

export interface IClassDetail {
  id: string;
  videoPreview: string;
  duration: string;
  level: string;
  exercises: IExerciseListItem[];
}

export interface IClassDetailSchema {
  data?: IClassDetail;
  isLoading: boolean;
  error?: string;
}
