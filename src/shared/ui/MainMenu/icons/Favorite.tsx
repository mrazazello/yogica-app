import { FC } from "react";

interface IProps {
  className: string;
}

export const FavoriteIcon: FC<IProps> = ({ className }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.75 4V20L12.25 15.5L19.75 20V4H4.75Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
};
