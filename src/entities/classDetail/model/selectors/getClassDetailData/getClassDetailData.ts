import { IStateSchema } from "@app/storeProvider";

export const getClassDetailData = (state: IStateSchema) =>
  state?.classDetail.data;
