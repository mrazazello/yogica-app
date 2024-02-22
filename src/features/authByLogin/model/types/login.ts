import { IError } from "@entities/error";

export interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginSchema {
  form: ILoginData;
  isLoading: boolean;
  error?: IError[];
}

export enum LoginErrorsEnum {
  NO_LOGIN_DATA = "No username or password were provided"
}
