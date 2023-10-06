import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";
import { FC } from "react";

import { routePaths } from "@shared/config/router/routes";
import { Link } from "react-router-dom";
import VideoIcon from "./videoIcon.svg";

interface IProps {
  item: {
    id: string;
    date: string;
    duration: string;
    level: string;
  };
}

export const ClassListCompactItem: FC<IProps> = (props) => {
  const { date, id, duration, level } = props.item;
  return (
    <div className="grid grid-cols-dateList gap-4 mb-20px">
      <TextLine align="right" size="base">
        {date}
      </TextLine>
      <div>
        <div className="flex">
          <Link to={routePaths.classDetail.URL(id)}>
            <H123 title={`Class #${id}`} type="h3" />
          </Link>
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
