import { IStateSchema } from "@app/storeProvider";

export const getPaymentsError = (state: IStateSchema) => state.payments?.error;
