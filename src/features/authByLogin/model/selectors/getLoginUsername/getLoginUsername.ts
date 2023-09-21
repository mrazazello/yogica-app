import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getLoginUsername = (state: IStateSchema) =>
  state?.loginForm?.username || "";
