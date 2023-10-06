import { IStateSchema } from "@app/storeProvider";

export const getFavoritesData = (state: IStateSchema) => state.favorites?.data;
