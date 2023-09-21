import { cn } from "@shared/lib/classNames/classNames";
import { FC } from "react";

interface IProps {
  text: React.ReactElement | string;
  align?: "left" | "center" | "right";
  size?: "sm" | "base" | "lg";
  inline?: boolean;
}

export const TextLine: FC<IProps> = (props) => {
  const { text, align = "left", size = "base", inline = "false" } = props;
  return (
    <div
      className={cn(
        "text-blue-400 font-Raleway",
        {
          "text-center": align === "center",
          "text-right": align === "right",

          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",

          inline: inline === true
        },
        []
      )}
    >
      {text}
    </div>
  );
};
