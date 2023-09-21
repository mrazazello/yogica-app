interface IExercisesItem {
  id: string;
  title: string;
  url: string;
  duration: string;
}

export interface IClassDetail {
  id: string;
  videoPreview: string;
  duration: string;
  level: string;
  exercises: IExercisesItem[];
}
