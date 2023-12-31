import { cn } from "@shared/lib/classNames/classNames";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  current: boolean;
  item: {
    title: string;
    icon: FC<{ className: string }>;
    url: string;
  };
}

export const MainMenuItem: FC<IProps> = (props) => {
  const { current } = props;
  const { title, icon, url } = props.item;
  return (
    <Link to={url} className="flex no-underline group">
      <div className="w-[50px] h-[43px] flex items-center justify-end flex-col">
        {icon({
          className: cn("text-blue-200 group-hover:text-green-200", {
            "text-green-200": current
          })
        })}
        <span
          className={cn(
            "font-Nunito text-blue-200 text-sm group-hover:text-green-200",
            {
              "text-green-200": current
            }
          )}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};
