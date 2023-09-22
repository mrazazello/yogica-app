import { AppLayout } from "@app/AppLayout";
import {
  FavoritesList,
  fetchFavoritesData,
  getFavoritesData
} from "@entities/favorites";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesData());
  }, [dispatch]);

  const favoritesData = useSelector(getFavoritesData);

  return (
    <AppLayout title="Favorites">
      <FavoritesList data={favoritesData} />
    </AppLayout>
  );
};

export default Favorites;
