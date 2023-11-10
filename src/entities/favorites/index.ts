import { getFavoritesData } from "./model/selectors/getFavoritesData/getFavoritesData";
import { getFavoritesError } from "./model/selectors/getFavoritesError/getFavoritesError";
import { getFavoritesLoading } from "./model/selectors/getFavoritesLoading/getFavoritesLoading";
import {
  favoritesActions,
  favoritesReducer
} from "./model/slice/favoritesSlice";
import { IFavoritesSchema } from "./model/types/favoretes";
import { FavoritesList } from "./ui/FavoritesList";

export {
  FavoritesList,
  favoritesActions,
  favoritesReducer,
  getFavoritesData,
  getFavoritesError,
  getFavoritesLoading
};
export type { IFavoritesSchema };
