import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { ClassListCompactItem } from "@shared/ui/classListCompactItem/ClassListCompactItem";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";

import { getClassesHistoryData } from "../model/selectors/getClassesHistoryData/getClassesHistoryData";
import { getClassesHistoryError } from "../model/selectors/getClassesHistoryError/getClassesHistoryError";
import { getClassesHistoryLoading } from "../model/selectors/getClassesHistoryLoading/getClassesHistoryLoading";
import { fetchClassesHistoryData } from "../model/services/fetchClassesHistoryData/fetchClassesHistoryData";

interface IProps {}

export const ClassesHistory: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClassesHistoryData());
  }, [dispatch]);

  const classesHistory = useSelector(getClassesHistoryData);
  const error = useSelector(getClassesHistoryError);
  const isLoading = useSelector(getClassesHistoryLoading);

  if (isLoading) {
    return <Skeleton title rows={2} />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {classesHistory &&
        classesHistory.map((item) => (
          <ClassListCompactItem key={item.id} item={item} />
        ))}
    </>
  );
};
