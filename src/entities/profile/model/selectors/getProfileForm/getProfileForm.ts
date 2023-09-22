import { IStateSchema } from "@app/storeProvider";

export const getProfileForm = (state: IStateSchema) => state.profile?.form;
