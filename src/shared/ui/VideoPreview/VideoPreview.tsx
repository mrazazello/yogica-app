import { FC } from "react";
import PlayIcon from "./playIcon.svg";
import "./videoPreview.css";

interface IProps {
  url: string;
}

export const VideoPreview: FC<IProps> = (props) => {
  const { url } = props;
  return (
    <div
      className="flex items-center justify-center w-full bg-no-repeat bg-cover aspect-[2/1]"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="playIcon flex items-center justify-center">
        <img src={PlayIcon} width={20} height={22} alt="play" />
      </div>
    </div>
  );
};
