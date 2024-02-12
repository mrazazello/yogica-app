import { IStateSchema } from "@app/storeProvider";

export const getPracticeSettingsError = (state: IStateSchema) =>
  state.settings?.errors;
