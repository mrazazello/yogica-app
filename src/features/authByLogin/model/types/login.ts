export interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginSchema {
  form: ILoginData;
  isLoading: boolean;
}

export enum LoginErrorsEnum {
  NO_LOGIN_DATA = "No username or password were provided"
}
