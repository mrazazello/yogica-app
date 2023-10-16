import { IStateSchema } from "@app/storeProvider";

export const getProfileData = (state: IStateSchema) => state.profile?.data;
