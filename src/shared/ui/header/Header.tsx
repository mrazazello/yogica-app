import { routePaths } from "@shared/config/router/routes";
import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "./HeaderLogo.svg";

interface IProps {
  title?: string;
}

export const Header: FC<IProps> = (props) => {
  const { title } = props;
  return (
    <div className="w-full flex items-center justify-center py-2 px-2 border-b border-solid border-gray-300">
      {title ? (
        <h1 className="text-3xl font-bold">{title}</h1>
      ) : (
        <Link to={routePaths.main}>
          <img src={logo} width={320} height={63} alt="Yogica" />
        </Link>
      )}
    </div>
  );
};
