import { IStateSchema } from "@app/storeProvider";

export const getProfileReadonly = (state: IStateSchema) =>
  state.profile?.readonly;
