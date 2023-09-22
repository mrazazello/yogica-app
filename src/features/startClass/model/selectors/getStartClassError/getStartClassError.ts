import { IStateSchema } from "@app/storeProvider";

export const getStartClassError = (state: IStateSchema) =>
  state.startClass.error;
