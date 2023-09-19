import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getLoginIsLoading = (state: IStateSchema) =>
  state?.loginForm?.isLoading || false;
