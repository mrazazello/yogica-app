import { IStateSchema } from "@app/storeProvider";

export const getClassDetailError = (state: IStateSchema) =>
  state?.classDetail.error;
