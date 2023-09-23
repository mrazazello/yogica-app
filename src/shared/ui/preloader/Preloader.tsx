import { cn } from "@shared/lib/classNames/classNames";
import "./preloader.css";

interface IProps {
  text?: string;
  height?: "block" | "full";
}

export const Preloader = (props: IProps) => {
  const { text, height = "full" } = props;

  return (
    <div
      className={cn("w-full flex flex-col items-center justify-center", {
        "h-full": height === "full",
        "h-auto": height === "block"
      })}
    >
      <div className="ldsEllipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
      {text && <div>{text}</div>}
    </div>
  );
};
