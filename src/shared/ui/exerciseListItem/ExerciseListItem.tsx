import { FC } from "react";

import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";

export interface IExerciseListItem {
  id: string;
  name: string;
  url: string;
  duration: string;
}
interface IProps {
  item: IExerciseListItem;
}

export const ExerciseListItem: FC<IProps> = (props) => {
  const { name, url, duration } = props.item;

  return (
    <div className="flex items-center gap-10px">
      <img src={url} width={80} height={80} alt={name} />
      <div className="flex flex-col">
        <H123 title={name} type="h3" />
        <TextLine text={`${duration} min`} />
      </div>
    </div>
  );
};
