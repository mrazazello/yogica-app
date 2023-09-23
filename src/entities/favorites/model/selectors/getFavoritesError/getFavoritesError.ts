import { IStateSchema } from "@app/storeProvider";

export const getFavoritesError = (state: IStateSchema) => state.favorites.error;
