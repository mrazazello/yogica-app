import { getFavoritesData } from "./model/selectors/getFavoritesData/getFavoritesData";
import { getFavoritesError } from "./model/selectors/getFavoritesError/getFavoritesError";
import { getFavoritesLoading } from "./model/selectors/getFavoritesLoading/getFavoritesLoading";
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
  getFavoritesData,
  getFavoritesError,
  getFavoritesLoading
};
export type { IFavorite, IFavoritesSchema };
