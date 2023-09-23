export interface IStartClassForm {
  exercisesDuration?: string;
  level?: string;
  pranoyamaDuration?: string;
  chantingDuration?: string;
  shavasanaDuration?: string;
}

export interface IStartClassSchema {
  form?: IStartClassForm;
  isLoading: boolean;
  error?: string;
}

export interface IRandomClass {
  id: string;
}
