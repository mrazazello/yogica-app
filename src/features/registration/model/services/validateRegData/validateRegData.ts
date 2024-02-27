import {
  IRegistrationData,
  RegistrationErrorsEnum
} from "../../types/registration";

export const validateRegData = (data?: IRegistrationData) => {
  console.log("reg data: ", data);
  if (!data) {
    return [RegistrationErrorsEnum.NO_REG_DATA];
  }

  const { email, firstName, lastName, password } = data;
  const errors = [];

  if (email === "" || password === "" || firstName === "" || lastName === "") {
    errors.push(RegistrationErrorsEnum.NO_REG_DATA);
  }

  return errors;
};
