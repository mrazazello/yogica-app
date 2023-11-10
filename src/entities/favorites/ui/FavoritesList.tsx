import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { Alert } from "@shared/ui/alert/Alert";
import { ClassListFullItem } from "@shared/ui/classListFullItem/ClassListFullItem";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";

import { getFavoritesError } from "../model/selectors/getFavoritesError/getFavoritesError";
import { getFavoritesLoading } from "../model/selectors/getFavoritesLoading/getFavoritesLoading";
import { fetchFavoritesData } from "../model/services/fetchFavoritesData/fetchFavoritesData";
import { getFavoritesEntities } from "../model/slice/favoritesSlice";

interface IProps {}

export const FavoritesList: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesData());
  }, [dispatch]);

  const favorites = useSelector(getFavoritesEntities.selectAll);
  const error = useSelector(getFavoritesError);
  const loading = useSelector(getFavoritesLoading);

  if (loading) {
    return <Skeleton title preview />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {favorites && (
        <div className="flex flex-col gap-20px">
          {favorites.map((item) => (
            <ClassListFullItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
