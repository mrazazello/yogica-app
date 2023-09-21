import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getLoginPassword = (state: IStateSchema) =>
  state?.loginForm?.password || "";
