import { IStateSchema } from "@app/storeProvider";

export const getLoginIsLoading = (state: IStateSchema) =>
  state?.loginForm?.isLoading || false;
