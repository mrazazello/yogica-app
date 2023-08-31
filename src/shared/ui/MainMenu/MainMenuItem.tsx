import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  item: {
    title: string;
    icon: FC<{ className: string }>;
    url: string;
  };
}

export const MainMenuItem: FC<IProps> = (props) => {
  const { title, icon, url } = props.item;
  return (
    <Link to={url} className="flex no-underline group">
      <div className="flex items-center justify-end flex-col">
        {icon({ className: "text-blue-200 group-hover:text-green-200" })}
        <span className="font-Nunito text-blue-200 text-xs group-hover:text-green-200">
          {title}
        </span>
      </div>
    </Link>
  );
};
