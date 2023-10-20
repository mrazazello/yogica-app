// export interface IStartClassForm {
//   exercisesDuration?: string;
//   level?: string;
//   pranoyamaDuration?: string;
//   chantingDuration?: string;
//   shavasanaDuration?: string;
// }

export interface IRequestClassParams {
  exercise?: string;
  level?: string;
  breathing?: string;
  chanting?: string;
  relaxation?: string;
}

export interface IStartClassSchema {
  isLoading: boolean;
  error?: string;
}

export interface IRandomClass {
  id: string;
}
