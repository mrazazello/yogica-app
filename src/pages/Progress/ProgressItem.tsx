import { FC } from "react";
import { H123 } from "shared/ui/H123/H123";
import { TextLine } from "shared/ui/Text/TextLine";

interface IProps {
  item: {
    date: string;
    title: string;
    duration: string;
    level: string;
  };
}

export const ProgressItem: FC<IProps> = (props) => {
  const { date, title, duration, level } = props.item;
  return (
    <div className="grid grid-cols-dateList gap-4 mb-20px">
      <TextLine text={date} align="right" size="base" />
      <div>
        <H123 title={title} type="h3" />
        <TextLine text={`${duration} min duration, ${level}`} size="sm" />
      </div>
    </div>
  );
};
