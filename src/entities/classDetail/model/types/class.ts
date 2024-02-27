import { IExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";

export interface IClassDetail {
  id: string;
  videoPreview: string;
  streamUrl: string;
  duration: string;
  level: string;
  favorite: boolean;
  exercises: IExerciseListItem[];
}

export interface IClassDetailSchema {
  data?: IClassDetail;
  isLoading: boolean;
}
