import { FC } from "react";

import { Button } from "@shared/ui/button/Button";
import { ExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";
import { TextLine } from "@shared/ui/text/TextLine";
import { VideoPreview } from "@shared/ui/videoPreview/VideoPreview";

import { Alert } from "@shared/ui/alert/Alert";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { IClassDetail } from "../model/types/class";
import FavoriteIcon from "./favorite.svg";

interface IProps {
  classDetail?: IClassDetail;
  isLoading?: boolean;
  error?: string;
}

export const ClassDetail: FC<IProps> = (props) => {
  const { classDetail, isLoading, error } = props;

  if (error) {
    return <Alert title={error} type="error" />;
  }

  return (
    <>
      {isLoading ? (
        <Preloader text="loading profile" />
      ) : (
        classDetail && (
          <>
            <div className="w-full h-auto p-10px ">
              <VideoPreview url={classDetail.videoPreview} className="mb-5px" />
              <div className="flex justify-between">
                <TextLine
                  text={`${classDetail.duration} min duration, ${classDetail.level} level`}
                />
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
              <Button wFull>Start</Button>
            </div>
          </>
        )
      )}
    </>
  );
};
