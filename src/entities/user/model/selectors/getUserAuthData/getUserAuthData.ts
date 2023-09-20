import { IStateSchema } from "@app/storeProvider/config/stateSchema";

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
