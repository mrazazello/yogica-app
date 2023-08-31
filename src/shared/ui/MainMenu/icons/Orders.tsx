import { FC } from "react";

interface IProps {
  className: string;
}

export const OrdersIcon: FC<IProps> = ({ className }) => {
  return (
    <svg
      width="29"
      height="25"
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.5 4.5L8 4.5C5.75 4.5 4.25 6.5 4.25 10.5V22.5L19.75 22.5V10.5C19.75 6.5 21.25 4.5 23.5 4.5Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M19.25 11.5H27.25C27.25 9.16667 27.25 4.5 23.25 4.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M7.25 11.5L9.25 13.5L13.25 9.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.25 13.5L16.25 13.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.25 17.5L16.25 17.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
