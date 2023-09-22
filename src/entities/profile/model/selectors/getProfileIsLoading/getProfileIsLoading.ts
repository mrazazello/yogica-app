import { IStateSchema } from "@app/storeProvider";

export const getProfileIsLoading = (state: IStateSchema) =>
  state.profile?.isLoading;
