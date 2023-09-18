import { H123 } from "@shared/ui/H123/H123";
import { TextLine } from "@shared/ui/Text/TextLine";
import { FC } from "react";

export const ExerciseItem: FC = () => {
  return (
    <div className="flex items-center gap-10px">
      <img
        src="/temp/exercisePreview.jpg"
        width={80}
        height={80}
        alt="exercise"
      />
      <div className="flex flex-col">
        <H123 title="Chuturanga dandasana" type="h3" />
        <TextLine text="2 min" />
      </div>
    </div>
  );
};
