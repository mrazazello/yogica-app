import { FC } from "react";

import { Player } from "@shared/player/Player";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { ExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { TextLine } from "@shared/ui/text/TextLine";

import { IClassDetail } from "../model/types/class";
import FavoriteIcon from "./favorite.svg";

interface IProps {
  classDetail?: IClassDetail;
  isLoading?: boolean;
  error?: string;
}

export const ClassDetail: FC<IProps> = (props) => {
  const { classDetail, isLoading, error } = props;

  if (isLoading) {
    return <Preloader text="Loading class data" />;
  }

  if (error) {
    return <Alert title={error} type="error" className="m-10px" />;
  }

  return (
    <>
      {classDetail && (
        <>
          <div className="w-full h-auto p-10px ">
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
              <img
                src={FavoriteIcon}
                width={24}
                height={24}
                alt="Add to favorite"
              />
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
      )}
    </>
  );
};
