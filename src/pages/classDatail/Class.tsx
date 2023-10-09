import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppLayout } from "@app/AppLayout";
import {
  ClassDetail,
  fetchClassDetailData,
  getClassDetailData,
  getClassDetailError,
  getClassDetailLoading
} from "@entities/classDetail";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { useSelector } from "react-redux";

const Class = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    params.id && dispatch(fetchClassDetailData(params.id));
  }, [dispatch, params.id]);

  const classDetail = useSelector(getClassDetailData);
  const error = useSelector(getClassDetailError);
  const loading = useSelector(getClassDetailLoading);

  return (
    <AppLayout
      title={classDetail?.id && `Class # ${classDetail?.id}`}
      noPadding={true}
    >
      <ClassDetail
        classDetail={classDetail}
        isLoading={loading}
        error={error}
      />
    </AppLayout>
  );
};

export default Class;
