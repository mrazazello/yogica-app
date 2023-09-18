import { H123 } from "@shared/ui/H123/H123";
import { TextLine } from "@shared/ui/Text/TextLine";
import { FC } from "react";

interface IProps {
  item: {
    date: string;
    title: string;
    duration: string;
    level: string;
  };
}

export const ClassHistoryItem: FC<IProps> = (props) => {
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
