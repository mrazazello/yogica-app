import { IStateSchema } from "@app/storeProvider";

export const getProfileError = (state: IStateSchema) => state.profile?.errors;
