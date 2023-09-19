import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getLoginError = (state: IStateSchema) =>
  state?.loginForm?.error || "";
