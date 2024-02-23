import { EntityState } from "@reduxjs/toolkit";

export interface IFavoriteItem {
  id: string;
  duration: string;
  level: string;
  videoPreview: string;
}

export interface IFavoritesSchema extends EntityState<IFavoriteItem> {
  data?: IFavoriteItem[];
  isLoading: boolean;
}
