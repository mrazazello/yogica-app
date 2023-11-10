import { FC } from "react";

interface IProps {
  fill?: string;
  onClick?: () => void;
}

export const FavoriteIcon: FC<IProps> = (props) => {
  const { fill, onClick } = props;

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <path
        d="M4.25 4.5V20.5L11.75 16L19.25 20.5V4.5H4.25Z"
        stroke="#9DC1D7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
