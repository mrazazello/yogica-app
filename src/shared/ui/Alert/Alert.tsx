import { FC } from "react";
import RingIcon from "./Ring.svg";

interface IProps {
  type: "warning" | "error" | "info";
  title: string;
  description?: string;
}

export const Alert: FC<IProps> = (props) => {
  const { title, description } = props;
  return (
    <div className="flex gap-10px items-start bg-pink-100 border border-pink-200 rounded-md p-20px">
      <img src={RingIcon} width={26} height={26} alt="Ring icon" />
      <div>
        <div className="text-pink-400 font-bold text-lg">{title}d</div>
        <div className="text-pink-400 text-sm mt-10px">{description}</div>
      </div>
    </div>
  );
};
