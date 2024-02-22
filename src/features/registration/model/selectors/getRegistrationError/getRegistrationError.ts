import { IStateSchema } from "@app/storeProvider";

export const getRegistrationError = (state: IStateSchema) =>
  state?.regForm?.error;
