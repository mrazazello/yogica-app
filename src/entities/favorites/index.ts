import { getFavoritesData } from "./model/selectors/getFavoritesData";
import { fetchFavoritesData } from "./model/services/fetchFavoritesData/fetchFavoritesData";
import {
  favoritesActions,
  favoritesReducer
} from "./model/slice/favoritesSlice";
import { IFavorite, IFavoritesSchema } from "./model/types/favoretes";
import { FavoritesList } from "./ui/FavoritesList";

export {
  FavoritesList,
  favoritesActions,
  favoritesReducer,
  fetchFavoritesData,
  getFavoritesData
};
export type { IFavorite, IFavoritesSchema };
