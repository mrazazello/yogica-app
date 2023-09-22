import { IStateSchema } from "@app/storeProvider";

export const getStartClassLoading = (state: IStateSchema) =>
  state.startClass.isLoading;
