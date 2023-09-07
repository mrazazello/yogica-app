import { FC } from "react";
import { cn } from "shared/lib/classNames/classNames";

interface IProps {
  text: string;
  wFull?: boolean;
}

export const Button: FC<IProps> = (props) => {
  const { text, wFull = false } = props;
  return (
    <button
      className={cn(
        "py-2 px-4 bg-green-100 text-green-300 font-bold border-b-4 border-green-200 rounded-lg",
        { "w-full": wFull }
      )}
    >
      {text}
    </button>
  );
};
