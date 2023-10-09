import { cn } from "@shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  wFull?: boolean;
  onClick?: () => void;
  theme?: "primary" | "secondary";
}

export const Button: FC<IProps> = (props) => {
  const {
    children,
    wFull = false,
    onClick,
    theme = "primary",
    ...otherProps
  } = props;
  return (
    <button
      className={cn(
        "py-2 px-4 font-Nunito font-bold text-xl border-b-4 rounded-lg disabled:bg-gray-500 disabled:border-gray-700 disabled:text-gray-600",
        {
          "w-full": wFull,
          "bg-green-100 text-green-300 border-green-200": theme === "primary",
          "bg-blue-500 text-blue-700 border-blue-600": theme === "secondary"
        }
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
