import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";

import VideoIcon from "./videoIcon.svg";

interface IProps {
  item: {
    date: string;
    title: string;
    duration: string;
    level: string;
  };
}

export const ClassListCompactItem: FC<IProps> = (props) => {
  const { date, title, duration, level } = props.item;
  return (
    <div className="grid grid-cols-dateList gap-4 mb-20px">
      <TextLine align="right" size="base">
        {date}
      </TextLine>
      <div>
        <div className="flex">
          <H123 title={title} type="h3" />
          <img
            src={VideoIcon}
            width={18}
            height={18}
            alt="video"
            className="ml-5px"
          />
        </div>
        <TextLine size="sm">
          {duration} min duration, {level}
        </TextLine>
      </div>
    </div>
  );
};
