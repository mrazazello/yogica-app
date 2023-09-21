import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getStartClassLoading = (state: IStateSchema) =>
  state.startClass.isLoading;
