import { cn } from "@shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  wFull?: boolean;
  onClick?: () => void;
}

export const Button: FC<IProps> = (props) => {
  const { children, wFull = false, onClick, ...otherProps } = props;
  return (
    <button
      className={cn(
        "py-2 px-4 bg-green-100 text-green-300 font-bold border-b-4 border-green-200 rounded-lg disabled:bg-gray-300 disabled:border-gray-400 disabled:text-white",
        { "w-full": wFull }
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
