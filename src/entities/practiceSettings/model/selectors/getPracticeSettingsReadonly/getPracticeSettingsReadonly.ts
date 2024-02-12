import { IStateSchema } from "@app/storeProvider";

export const getPracticeSettingsReadonly = (state: IStateSchema) =>
  state.settings?.readonly;
