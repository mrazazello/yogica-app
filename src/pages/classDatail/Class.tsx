import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppLayout } from "@app/AppLayout";
import {
  ClassDetail,
  fetchClassDetailData,
  getClassDetailData
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

  return (
    <AppLayout title="Class # 111" noPadding={true}>
      <ClassDetail classDetail={classDetail} />
    </AppLayout>
  );
};

export default Class;
