export interface IFavorite {
  id: string;
  duration: string;
  level: string;
  videoPreview: string;
}

export interface IFavoritesSchema {
  data?: IFavorite[];
  isLoading: boolean;
  error?: string;
}
