import { FC } from "react";
import { cn } from "shared/lib/classNames/classNames";

interface IProps {
  title: string;
  align?: "left" | "right" | "center";
}

export const H123: FC<IProps> = (props) => {
  const { title, align = "left" } = props;
  return (
    <h1
      className={cn(
        "text-3xl font-bold font-Nunito",
        { "text-center": align === "center", "text-right": align === "right" },
        []
      )}
    >
      {title}
    </h1>
  );
};
