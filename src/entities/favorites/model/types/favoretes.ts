export interface IFavorite {
  id: string;
  title: string;
  url: string;
  duration: string;
  level: string;
}

export interface IFavoritesSchema {
  data?: IFavorite[];
  isLoading: boolean;
  error?: string;
}
