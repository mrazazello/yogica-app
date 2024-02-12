import { IStateSchema } from "@app/storeProvider";

export const getPracticeSettingsData = (state: IStateSchema) =>
  state.settings?.data;
