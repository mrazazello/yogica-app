import { IError } from "@entities/error";

export interface IRegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IRegistrationSchema {
  form: IRegistrationData;
  isLoading: boolean;
  error?: IError[];
}

export enum RegistrationErrorsEnum {
  NO_REG_DATA = "No data were provided"
}
