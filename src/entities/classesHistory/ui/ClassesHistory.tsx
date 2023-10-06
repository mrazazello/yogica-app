import { Alert } from "@shared/ui/alert/Alert";
import { ClassListCompactItem } from "@shared/ui/classListCompactItem/ClassListCompactItem";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { FC } from "react";
import { IClassesHistory } from "../model/types/classesHistory";
interface IProps {
  data?: IClassesHistory[];
  error?: string;
  isLoading?: boolean;
}

export const ClassesHistory: FC<IProps> = (props) => {
  const { data, error, isLoading } = props;

  if (isLoading) {
    return <Preloader text="Loading classes history data" />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {data &&
        data.map((item) => <ClassListCompactItem key={item.id} item={item} />)}
    </>
  );
};
