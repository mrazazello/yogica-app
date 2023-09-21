import { Button } from "@shared/ui/button/Button";
import { TextLine } from "@shared/ui/text/TextLine";
import { VideoPreview } from "@shared/ui/videoPreview/VideoPreview";

import { ExerciseListItem } from "@shared/ui/exerciseListItem/ExerciseListItem";
import FavoriteIcon from "./favorite.svg";

const exercises = [
  {
    id: "1",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "2"
  },
  {
    id: "2",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "2"
  },
  {
    id: "3",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "3"
  },
  {
    id: "4",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "5"
  },
  {
    id: "1",
    title: "Chuturanga",
    url: "/temp/exercisePreview.jpg",
    duration: "2"
  }
];

export const ClassDetail = () => {
  return (
    <>
      <div className="w-full h-auto p-10px ">
        <VideoPreview url="/temp/videoScreen.jpg" className="mb-5px" />
        <div className="flex justify-between">
          <TextLine text={`25 min duration, Zero level`} />
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
        <Button text="Start" wFull />
      </div>
    </>
  );
};
