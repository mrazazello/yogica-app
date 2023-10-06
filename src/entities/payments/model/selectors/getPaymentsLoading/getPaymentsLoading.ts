import { IStateSchema } from "@app/storeProvider";

export const getPaymentsLoading = (state: IStateSchema) =>
  state.payments?.isLoading;
