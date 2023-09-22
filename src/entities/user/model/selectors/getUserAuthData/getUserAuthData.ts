import { IStateSchema } from "@app/storeProvider";

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
