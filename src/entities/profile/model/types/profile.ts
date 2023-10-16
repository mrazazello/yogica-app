export interface IProfile {
  firstName?: string;
  lastName?: string;
  params?: {
    level: string;
    exercise: string;
    chanting: string;
    breathing: string;
    relaxation: string;
  };
}

export interface IProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  validateErrors?: ProfileErrorsEnum[] | string;
  readonly: boolean;
}

export enum ProfileErrorsEnum {
  NO_PROFILE_DATA = "no profile data",
  NO_FIRSTNAME = "no first name",
  NO_LASTNAME = "no last name",
  NETWORK_ERROR = "network error"
}
