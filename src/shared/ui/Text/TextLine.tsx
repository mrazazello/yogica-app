import { FC } from "react";
import { cn } from "shared/lib/classNames/classNames";

interface IProps {
  text: React.ReactElement | string;
  align?: "left" | "center" | "right";
}

export const TextLine: FC<IProps> = (props) => {
  const { text, align = "left" } = props;
  return (
    <div
      className={cn(
        "text-sm text-blue-400 font-Raleway",
        { "text-center": align === "center", "text-right": align === "right" },
        []
      )}
    >
      {text}
    </div>
  );
};
