import { IStateSchema } from "@app/storeProvider";

export const getLoginError = (state: IStateSchema) =>
  state?.loginForm?.error || "";
