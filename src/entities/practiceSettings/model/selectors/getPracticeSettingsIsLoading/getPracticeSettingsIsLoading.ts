import { IStateSchema } from "@app/storeProvider";

export const getPracticeSettingsIsLoading = (state: IStateSchema) =>
  state.settings?.isLoading;
