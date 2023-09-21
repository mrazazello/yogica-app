import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getStartClassError = (state: IStateSchema) =>
  state.startClass.error;
