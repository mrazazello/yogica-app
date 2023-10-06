import { IStateSchema } from "@app/storeProvider";

export const getPaymentsData = (state: IStateSchema) => state.payments?.data;
