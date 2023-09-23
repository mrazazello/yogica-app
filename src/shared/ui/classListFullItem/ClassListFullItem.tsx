import { routePaths } from "@shared/config/router/routes";
import { H123 } from "@shared/ui/h123/H123";
import { TextLine } from "@shared/ui/text/TextLine";
import { VideoPreview } from "@shared/ui/videoPreview/VideoPreview";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface IFavoritesItem {
  id: string;
  videoPreview: string;
  duration: string;
  level: string;
}

interface IProps {
  item: IFavoritesItem;
}

export const ClassListFullItem: FC<IProps> = (props) => {
  const { id, videoPreview, duration, level } = props.item;

  return (
    <div className="w-full">
      <Link to={routePaths.classDetail.URL(id)}>
        <VideoPreview url={videoPreview} className="mb-5px" />
      </Link>
      <Link
        to={routePaths.classDetail.URL(id)}
        className="no-underline text-black"
      >
        <H123 title={`# ${id}`} type="h3" />
      </Link>
      <TextLine>
        {duration} min duration, ${level}
      </TextLine>
    </div>
  );
};
