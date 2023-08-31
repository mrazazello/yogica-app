import { routePaths } from "app/routes";
import { FC } from "react";
import { MainMenuItem } from "./MainMenuItem";
import favorite from "./assets/favorite.svg";
import more from "./assets/more.svg";
import orders from "./assets/orders.svg";
import progress from "./assets/progress.svg";
import start from "./assets/start.svg";

interface IProps {}

type MenuItemType = {
  title: string;
  icon: string;
  url: string;
};

const mainMenuItems: MenuItemType[] = [
  {
    title: "Start",
    icon: start,
    url: routePaths.start,
  },
  {
    title: "Favorite",
    icon: favorite,
    url: routePaths.favorites,
  },
  {
    title: "Progress",
    icon: progress,
    url: routePaths.progress,
  },
  {
    title: "Orders",
    icon: orders,
    url: routePaths.orders,
  },
  {
    title: "More",
    icon: more,
    url: routePaths.more,
  },
];

export const MainMenu: FC<IProps> = () => {
  return (
    <div className="flex flex-wrap justify-between h-16 p-10px w-screen bg-blue-400 text-white">
      {mainMenuItems.map((item) => (
        <MainMenuItem key={item.title} item={item} />
      ))}
    </div>
  );
};
