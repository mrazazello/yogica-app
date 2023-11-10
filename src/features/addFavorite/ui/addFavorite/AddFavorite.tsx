import { FC } from "react";

import { changeClassFavorite } from "@entities/classDetail";
import { favoritesActions } from "@entities/favorites";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";

import { FavoriteIcon } from "../favoriteIcon/FavoriteIcon";

interface IProps {
  id: string;
  status: boolean;
}

export const AddFavorite: FC<IProps> = (props) => {
  const { id, status } = props;
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(changeClassFavorite(id))
      .unwrap()
      .then((res) => {
        if (status) {
          dispatch(favoritesActions.removeItem(res.id));
        } else {
          dispatch(favoritesActions.addItem(res));
        }
      });
  };

  const fill = status ? "#9DC1D7" : "none";

  return (
    <>
      <FavoriteIcon fill={fill} onClick={onClickHandler} />
    </>
  );
};
