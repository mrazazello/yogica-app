import { ClassListFullItem } from "@shared/ui/classListFullItem/ClassListFullItem";
import { FC } from "react";
import { IFavorite } from "..";

interface IProps {
  data?: IFavorite[];
}

export const FavoritesList: FC<IProps> = (props) => {
  const { data } = props;

  return (
    data && (
      <div className="flex flex-col gap-20px">
        {data.map((item) => (
          <ClassListFullItem key={item.id} item={item} />
        ))}
      </div>
    )
  );
};
