import { useEffect } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import {
  ClassesHistory,
  fetchClassesHistoryData,
  getClassesHistoryData,
  getClassesHistoryError,
  getClassesHistoryLoading
} from "@entities/classesHistory";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";

function Progress() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClassesHistoryData());
  }, [dispatch]);

  const classesHistoryData = useSelector(getClassesHistoryData);
  const error = useSelector(getClassesHistoryError);
  const isLoading = useSelector(getClassesHistoryLoading);

  return (
    <AppLayout title="Progress">
      <ClassesHistory
        data={classesHistoryData}
        error={error}
        isLoading={isLoading}
      />
    </AppLayout>
  );
}

export default Progress;
