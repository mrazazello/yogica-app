import { IStateSchema } from "@app/storeProvider";

export const getClassesHistoryData = (state: IStateSchema) =>
  state.classesHistory?.data;
