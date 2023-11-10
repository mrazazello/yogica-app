import { IStateSchema } from "@app/storeProvider";

export const getTariffsError = (state: IStateSchema) => state.tariffs.error;
