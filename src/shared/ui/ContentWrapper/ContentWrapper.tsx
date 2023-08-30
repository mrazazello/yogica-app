import { FC } from "react";
import { cn } from "shared/lib/classNames/classNames";

interface IProps {
  align?: "left" | "center" | "right";
  valign?: "top" | "center" | "bottom";
  children: React.ReactNode;
}

export const ContentWrapper: FC<IProps> = (props) => {
  const { align = "start", valign = "start", children } = props;
  return (
    <div
      className={cn(
        "h-full w-full flex flex-col px-10px",
        {
          "items-start": align === "left",
          "items-center": align === "center",
          "items-end": align === "right",

          "justify-start": valign === "top",
          "justify-center": valign === "center",
          "justify-end": valign === "bottom",
        },
        []
      )}
    >
      {children}
    </div>
  );
};
