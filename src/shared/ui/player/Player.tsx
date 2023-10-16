import { FC, VideoHTMLAttributes, lazy, useRef } from "react";
// import ReactHlsPlayer from "react-hls-player/dist";
const ReactHlsPlayer = lazy(() => import("react-hls-player/dist"));

interface IProps extends VideoHTMLAttributes<HTMLVideoElement> {
  stream: string;
  className?: string;
  onProgressFinish?: () => void;
}

export const Player: FC<IProps> = (props) => {
  const { stream, className, ...otherProps } = props;
  const playerRef = useRef(null);

  return (
    <>
      <ReactHlsPlayer
        src={stream}
        playerRef={playerRef}
        disablePictureInPicture={true}
        controlsList="noplaybackrate nodownload"
        className={className}
        {...otherProps}
      />
    </>
  );
};
