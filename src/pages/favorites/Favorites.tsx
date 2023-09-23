import { useEffect } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import {
  FavoritesList,
  fetchFavoritesData,
  getFavoritesData,
  getFavoritesError,
  getFavoritesLoading
} from "@entities/favorites";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";

const Favorites = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesData());
  }, [dispatch]);

  const favoritesData = useSelector(getFavoritesData);
  const error = useSelector(getFavoritesError);
  const loading = useSelector(getFavoritesLoading);

  return (
    <AppLayout title="Favorites">
      <FavoritesList data={favoritesData} error={error} isLoading={loading} />
    </AppLayout>
  );
};

export default Favorites;
