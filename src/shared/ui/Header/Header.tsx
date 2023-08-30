import { FC } from "react";
import logo from "./HeaderLogo.svg";

interface IProps {
  title?: string;
}

export const Header: FC<IProps> = (props) => {
  const { title } = props;
  return (
    <div className="flex w-screen items-center pt-4 pb-2 pl-2 pr-2 flex-col border-b border-solid border-gray-300">
      {title ? (
        <h1 className="text-3xl font-bold">{title}</h1>
      ) : (
        <img src={logo} width={320} height={63} alt="Yogica" />
      )}
    </div>
  );
};
