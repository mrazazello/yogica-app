import { routePaths } from "@shared/config/router/routes";
import { H123 } from "@shared/ui/H123/H123";
import { TextLine } from "@shared/ui/Text/TextLine";
import { VideoPreview } from "@shared/ui/VideoPreview/VideoPreview";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  item: {
    title: string;
    url: string;
    duration: string;
    level: string;
  };
}

export const ClassListFullItem: FC<IProps> = (props) => {
  const { title, url, duration, level } = props.item;

  return (
    <div className="w-full">
      <Link to={`${routePaths.classDetail}?id=1`}>
        <VideoPreview url={url} className="mb-5px" />
      </Link>
      <Link
        to={`${routePaths.classDetail}?id=1`}
        className="no-underline text-black"
      >
        <H123 title={title} type="h3" />
      </Link>
      <TextLine text={`${duration} min duration, ${level}`} />
    </div>
  );
};
