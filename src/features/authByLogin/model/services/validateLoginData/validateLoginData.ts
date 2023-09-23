import { ILoginData, LoginErrorsEnum } from "../../types/login";

export const validateLoginData = (data?: ILoginData) => {
  if (!data) {
    return [LoginErrorsEnum.NO_LOGIN_DATA];
  }

  const { username, password } = data;
  const errors = [];

  if (username === "") {
    errors.push(LoginErrorsEnum.NO_USERNAME);
  }

  if (password === "") {
    errors.push(LoginErrorsEnum.NO_PASSWORD);
  }

  return errors;
};
