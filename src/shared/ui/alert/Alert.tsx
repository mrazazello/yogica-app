import { cn } from "@shared/lib/classNames/classNames";
import { FC } from "react";
import RingIcon from "./Ring.svg";

interface IProps {
  type?: "warning" | "error" | "info";
  title: string;
  description?: string;
  className?: string;
}

export const Alert: FC<IProps> = (props) => {
  const { title, description, type = "error", className } = props;
  return (
    <div
      className={cn(
        "flex gap-10px items-start border border-pink-200 rounded-md p-20px",
        {
          "bg-pink-100": type === "error",
          "bg-yellow-100": type === "warning",
          "bg-green-400": type === "info"
        },
        [className]
      )}
    >
      <img src={RingIcon} width={26} height={26} alt="Ring icon" />
      <div>
        <div className="text-pink-400 font-bold text-lg">{title}</div>
        <div className="text-pink-400 text-sm mt-10px">{description}</div>
      </div>
    </div>
  );
};
