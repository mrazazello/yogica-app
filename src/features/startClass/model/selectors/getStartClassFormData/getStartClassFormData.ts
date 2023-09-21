import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getStartClassFormData = (state: IStateSchema) =>
  state.startClass.form;
