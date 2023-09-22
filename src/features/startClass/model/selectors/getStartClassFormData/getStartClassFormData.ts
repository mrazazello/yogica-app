import { IStateSchema } from "@app/storeProvider";

export const getStartClassFormData = (state: IStateSchema) =>
  state.startClass.form;
