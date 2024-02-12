import { IStateSchema } from "@app/storeProvider";

export const getPracticeSettingsForm = (state: IStateSchema) =>
  state.settings?.form;
