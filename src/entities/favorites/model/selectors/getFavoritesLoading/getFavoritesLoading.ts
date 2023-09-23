import { IStateSchema } from "@app/storeProvider";

export const getFavoritesLoading = (state: IStateSchema) =>
  state.favorites.isLoading;
