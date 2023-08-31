import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  item: {
    title: string;
    icon: string;
    url: string;
  };
}

export const MainMenuItem: FC<IProps> = (props) => {
  const { title, icon, url } = props.item;
  return (
    <Link to={url} className="flex no-underline group">
      <div className="flex items-center justify-end flex-col">
        <img
          src={icon}
          width={24}
          height={24}
          alt={title}
          className="mx-[13px] mb-[3px] text-red"
          style={{ color: "red" }}
        />
        <span className="font-Nunito text-blue-200 text-xs group-hover:text-green-200">
          {title}
        </span>
      </div>
    </Link>
  );
};
