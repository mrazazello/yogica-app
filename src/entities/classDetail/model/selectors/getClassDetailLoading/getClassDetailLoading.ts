import { IStateSchema } from "@app/storeProvider";

export const getClassDetailLoading = (state: IStateSchema) =>
  state?.classDetail.isLoading;
