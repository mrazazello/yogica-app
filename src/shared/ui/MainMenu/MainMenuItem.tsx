import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  icon: string;
}

export const MainMenuItem: FC<IProps> = (props) => {
  const { title, icon } = props;
  return (
    <Link to="/" className="flex no-underline">
      <div className="flex items-center justify-end flex-col">
        <img
          src={icon}
          width={24}
          height={24}
          alt={title}
          className="mx-[13px] mb-[3px]"
        />
        <span className="font-Nunito text-blue-200 text-xs hover:text-green-200">
          {title}
        </span>
      </div>
    </Link>
  );
};
