import { AppLayout } from "app/AppLayout";
import { TextLine } from "shared/ui/Text/TextLine";
import { VideoPreview } from "shared/ui/VideoPreview/VideoPreview";
import { ExerciseItem } from "./ExerciseItem";

import { Button } from "shared/ui/Button/Button";
import FavoriteIcon from "./favorite.svg";

const ClassDetail = () => {
  return (
    <AppLayout title="Class # 111" noPadding={true}>
      <div className="w-full h-auto p-10px ">
        <VideoPreview url="/temp/videoScreen.jpg" />
        <div className="flex justify-between">
          <TextLine text={`25 min duration, Zero level`} />
          <img src={FavoriteIcon} width={24} height={24} alt="" />
        </div>
      </div>
      <div className="h-full p-10px flex flex-col gap-20px overflow-y-auto">
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
      </div>
      <div className="w-full p-10px border-t border-blue-200">
        <Button text="Start" wFull />
      </div>
    </AppLayout>
  );
};

export default ClassDetail;
