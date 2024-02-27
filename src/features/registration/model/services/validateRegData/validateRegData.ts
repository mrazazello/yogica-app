import { IError } from "@entities/error";
import { emailRegExp } from "@shared/const/regExp";
import {
  IRegistrationData,
  RegistrationErrorsEnum
} from "../../types/registration";

export const validateRegData = (data?: IRegistrationData): IError | false => {
  if (!data) {
    return { code: "", message: RegistrationErrorsEnum.NO_REG_DATA };
  }

  const { email, firstName, lastName, password } = data;

  if (email === "") {
    return { code: "", message: RegistrationErrorsEnum.NO_EMAIL };
  }

  if (!emailRegExp.test(email)) {
    return { code: "", message: RegistrationErrorsEnum.WRONG_EMAIL };
  }

  if (password === "") {
    return { code: "", message: RegistrationErrorsEnum.NO_PASSWORD };
  }

  if (firstName === "") {
    return { code: "", message: RegistrationErrorsEnum.NO_FIRST_NAME };
  }

  if (lastName === "") {
    return { code: "", message: RegistrationErrorsEnum.NO_LAST_NAME };
  }

  return false;
};
