import { IStateSchema } from "@app/storeProvider";

export const getErrors = (state: IStateSchema) => state.errors.errors;
