export interface ILoginData {
  username: string;
  password: string;
}
export interface ILoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string[];
}

export enum LoginErrorsEnum {
  NO_LOGIN_DATA = "No data",
  NO_USERNAME = "No user name was provided",
  NO_PASSWORD = "No password was provided"
}
