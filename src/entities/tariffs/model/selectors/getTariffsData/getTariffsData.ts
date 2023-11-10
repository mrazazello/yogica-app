import { IStateSchema } from "@app/storeProvider";

export const getTariffsData = (state: IStateSchema) => state.tariffs.data;
