import { IStateSchema } from "@app/storeProvider";

export const getRegistrationData = (state: IStateSchema) =>
  state?.regForm?.form;

export const getRegistrationEmail = (state: IStateSchema) =>
  state?.regForm?.form.email;

export const getRegistrationFirstName = (state: IStateSchema) =>
  state?.regForm?.form.firstName;

export const getRegistrationLastName = (state: IStateSchema) =>
  state?.regForm?.form.lastName;

export const getRegistrationPassword = (state: IStateSchema) =>
  state?.regForm?.form.password;
