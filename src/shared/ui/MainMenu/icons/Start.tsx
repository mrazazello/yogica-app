import { FC } from "react";

interface IProps {
  className: string;
}

export const StartIcon: FC<IProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="11.5"
        cy="18.5"
        rx="7"
        ry="3"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M11.5 10.5L21.5 6.5L11.5 2.5L11.5 10.5ZM11.5 10.5V18"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
