import { FC } from "react";
import { cn } from "shared/lib/classNames/classNames";

interface IProps {
  title: string;
  align?: "left" | "right" | "center";
  type?: "h1" | "h2" | "h3";
}

export const H123: FC<IProps> = (props) => {
  const { title, align = "left", type = "h1" } = props;
  return (
    <h1
      className={cn(
        "font-Nunito font-bold",
        {
          "text-3xl": type === "h1",
          "text-2xl": type === "h2",
          "text-xl": type === "h3",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        []
      )}
    >
      {title}
    </h1>
  );
};
