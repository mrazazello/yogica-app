import { FC, VideoHTMLAttributes } from "react";
// const ReactHlsPlayer = lazy(() => import("react-hls-player/dist"));

interface IProps extends VideoHTMLAttributes<HTMLVideoElement> {
  stream: string;
  className?: string;
  onProgressFinish?: () => void;
}

export const Player: FC<IProps> = () => {
  // const { stream } = props;
  // const playerRef = useRef(null);

  return (
    <>
      Проигрыватель
      {/* <ReactHlsPlayer
        src={stream}
        playerRef={playerRef}
        disablePictureInPicture={true}
        controlsList="noplaybackrate nodownload"
        className={className}
        {...otherProps}
      /> */}
    </>
  );
};
