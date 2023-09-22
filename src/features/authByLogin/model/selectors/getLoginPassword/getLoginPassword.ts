import { IStateSchema } from "@app/storeProvider";

export const getLoginPassword = (state: IStateSchema) =>
  state?.loginForm?.password || "";
