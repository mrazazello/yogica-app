export interface IRegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IRegistrationSchema {
  form: IRegistrationData;
  isLoading: boolean;
}

export enum RegistrationErrorsEnum {
  NO_REG_DATA = "No data were provided"
}
