import { IStateSchema } from "@app/storeProvider";

export const getRegistrationIsLoading = (state: IStateSchema) =>
  state?.regForm?.isLoading || false;
