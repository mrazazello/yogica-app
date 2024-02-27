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
  NO_REG_DATA = "No data were provided",
  NO_FIRST_NAME = "First name field must not be empty",
  NO_LAST_NAME = "Last name field must not be empty",
  NO_PASSWORD = "Password field must not be empty",
  NO_EMAIL = "Email field must not be empty",
  WRONG_EMAIL = "Wrong email"
}

export interface IRegistrationResponse {
  entityCode: string;
  message: string;
}
