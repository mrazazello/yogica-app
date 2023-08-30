import { FC } from "react";
import { MainMenuItem } from "./MainMenuItem";
import favorite from "./assets/favorite.svg";
import more from "./assets/more.svg";
import orders from "./assets/orders.svg";
import progress from "./assets/progress.svg";
import start from "./assets/start.svg";

interface IProps {}

const mainMenuItems = [
  {
    title: "Start",
    icon: start,
  },
  {
    title: "Favorite",
    icon: favorite,
  },
  {
    title: "Progress",
    icon: progress,
  },
  {
    title: "Orders",
    icon: orders,
  },
  {
    title: "More",
    icon: more,
  },
];

export const MainMenu: FC<IProps> = () => {
  return (
    <div className="flex flex-wrap justify-between h-16 p-10px w-screen bg-blue-400 text-white">
      {mainMenuItems.map((item) => (
        <MainMenuItem title={item.title} icon={item.icon} />
      ))}
    </div>
  );
};
