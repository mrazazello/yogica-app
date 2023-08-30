import { FC } from "react";

interface IProps {
  title: string;
  icon: string;
}

export const MainMenuItem: FC<IProps> = (props) => {
  const { title, icon } = props;
  return (
    <div className="flex items-center justify-end flex-col text-xs">
      <img
        src={icon}
        width={24}
        height={24}
        alt={title}
        className="mx-[13px] mb-[3px]"
      />
      {title}
    </div>
  );
};
