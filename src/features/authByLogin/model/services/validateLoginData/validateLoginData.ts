import { ILoginData, LoginErrorsEnum } from "../../types/login";

export const validateLoginData = (data?: ILoginData) => {
  if (!data) {
    return [LoginErrorsEnum.NO_LOGIN_DATA];
  }

  const { username, password } = data;
  const errors = [];

  if (username === "" || password === "") {
    errors.push(LoginErrorsEnum.NO_LOGIN_DATA);
  }

  return errors;
};
