import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { AddFavorite } from "@features/addFavorite";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { ExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";
import { Player } from "@shared/ui/player/Player";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";
import { TextLine } from "@shared/ui/text/TextLine";

import { getClassDetailData } from "../model/selectors/getClassDetailData/getClassDetailData";
import { getClassDetailError } from "../model/selectors/getClassDetailError/getClassDetailError";
import { getClassDetailLoading } from "../model/selectors/getClassDetailLoading/getClassDetailLoading";
import { fetchClassDetailData } from "../model/services/fetchClassDetailData/fetchClassDetailData";

interface IProps {
  id: string;
}

export const ClassDetail: FC<IProps> = (props) => {
  const { id } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(fetchClassDetailData(id));
  }, [dispatch, id]);

  const classDetail = useSelector(getClassDetailData);
  const error = useSelector(getClassDetailError);
  const loading = useSelector(getClassDetailLoading);

  if (loading) {
    return <Skeleton title preview rows={8} className="m-10px" />;
  }

  if (error) {
    return <Alert title={error} type="error" className="m-10px" />;
  }

  return (
    classDetail && (
      <>
        <div className="w-full h-auto p-10px">
          <Player
            stream={classDetail.streamUrl}
            width="100%"
            poster={classDetail.videoPreview}
            controls={true}
            className="mb-5px"
          />
          <div className="flex justify-between">
            <TextLine>
              {classDetail.duration} min duration, {classDetail.level} level
            </TextLine>
            <AddFavorite id={classDetail.id} status={classDetail.favorite} />
          </div>
        </div>
        <div className="h-full p-10px flex flex-col gap-20px overflow-y-auto">
          {classDetail.exercises.map((item) => (
            <ExerciseListItem key={item.id} item={item} />
          ))}
        </div>
        <div className="w-full p-10px border-t border-blue-200">
          <Button wFull disabled>
            Start
          </Button>
        </div>
      </>
    )
  );
};
