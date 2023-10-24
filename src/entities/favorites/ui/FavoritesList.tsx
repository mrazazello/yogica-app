import { Alert } from "@shared/ui/alert/Alert";
import { ClassListFullItem } from "@shared/ui/classListFullItem/ClassListFullItem";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";
import { FC } from "react";
import { IFavorite } from "..";

interface IProps {
  data?: IFavorite[];
  error?: string;
  isLoading?: boolean;
}

export const FavoritesList: FC<IProps> = (props) => {
  const { data, error, isLoading } = props;

  if (isLoading) {
    return <Skeleton title preview />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {data && (
        <div className="flex flex-col gap-20px">
          {data.map((item) => (
            <ClassListFullItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
