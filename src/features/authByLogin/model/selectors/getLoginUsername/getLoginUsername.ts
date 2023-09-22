import { IStateSchema } from "@app/storeProvider";

export const getLoginUsername = (state: IStateSchema) =>
  state?.loginForm?.username || "";
