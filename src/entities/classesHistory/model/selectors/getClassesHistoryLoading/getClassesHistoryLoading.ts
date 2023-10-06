import { IStateSchema } from "@app/storeProvider";

export const getClassesHistoryLoading = (state: IStateSchema) =>
  state.classesHistory?.isLoading;
