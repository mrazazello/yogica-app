import { Button } from "@shared/ui/button/Button";
import { TextLine } from "@shared/ui/text/TextLine";
import { VideoPreview } from "@shared/ui/videoPreview/VideoPreview";

import { ExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";
import { FC } from "react";
import { IClassDetail } from "../types/class";
import FavoriteIcon from "./favorite.svg";

interface IProps {
  classDetail: IClassDetail;
}

export const ClassDetail: FC<IProps> = (props) => {
  const { duration, level, videoPreview, exercises } = props.classDetail;

  return (
    <>
      <div className="w-full h-auto p-10px ">
        <VideoPreview url={videoPreview} className="mb-5px" />
        <div className="flex justify-between">
          <TextLine text={`${duration} min duration, ${level} level`} />
          <img
            src={FavoriteIcon}
            width={24}
            height={24}
            alt="Add to favorite"
          />
        </div>
      </div>
      <div className="h-full p-10px flex flex-col gap-20px overflow-y-auto">
        {exercises.map((item) => (
          <ExerciseListItem key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full p-10px border-t border-blue-200">
        <Button wFull>Start</Button>
      </div>
    </>
  );
};
