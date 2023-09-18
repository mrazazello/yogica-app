import { cn } from "@shared/lib/classNames/classNames";
import { FC } from "react";
import PlayIcon from "./playIcon.svg";
import "./videoPreview.css";

interface IProps {
  className?: string;
  url: string;
}

export const VideoPreview: FC<IProps> = (props) => {
  const { className, url } = props;
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full bg-no-repeat bg-cover aspect-[2/1]",
        {},
        [className]
      )}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="playIcon flex items-center justify-center">
        <img src={PlayIcon} width={20} height={22} alt="play" />
      </div>
    </div>
  );
};
