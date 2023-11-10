import { IStateSchema } from "@app/storeProvider";

export const getTariffsLoading = (state: IStateSchema) =>
  state.tariffs.isLoading;
