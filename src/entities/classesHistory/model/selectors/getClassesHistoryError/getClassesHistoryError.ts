import { IStateSchema } from "@app/storeProvider";

export const getClassesHistoryError = (state: IStateSchema) =>
  state.classesHistory?.error;
