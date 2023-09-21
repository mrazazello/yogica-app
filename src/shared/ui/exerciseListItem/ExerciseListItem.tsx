import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";

interface IProps {
  item: {
    title: string;
    url: string;
    duration: string;
  };
}

export const ExerciseListItem: FC<IProps> = (props) => {
  const { title, url, duration } = props.item;

  return (
    <div className="flex items-center gap-10px">
      <img src={url} width={80} height={80} alt={title} />
      <div className="flex flex-col">
        <H123 title={title} type="h3" />
        <TextLine text={`${duration} min`} />
      </div>
    </div>
  );
};
