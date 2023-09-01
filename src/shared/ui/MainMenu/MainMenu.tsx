import { FC } from "react";

import { routePaths } from "shared/config/router/routes";

import { MainMenuItem } from "./MainMenuItem";
import { FavoriteIcon } from "./icons/Favorite";
import { MoreIcon } from "./icons/More";
import { OrdersIcon } from "./icons/Orders";
import { ProgressIcon } from "./icons/Progress";
import { StartIcon } from "./icons/Start";

interface IProps {}

type MenuItemType = {
  title: string;
  icon: FC<{ className: string }>;
  url: string;
};

const mainMenuItems: MenuItemType[] = [
  {
    title: "Start",
    icon: StartIcon,
    url: routePaths.start,
  },
  {
    title: "Favorite",
    icon: FavoriteIcon,
    url: routePaths.favorites,
  },
  {
    title: "Progress",
    icon: ProgressIcon,
    url: routePaths.progress,
  },
  {
    title: "Orders",
    icon: OrdersIcon,
    url: routePaths.orders,
  },
  {
    title: "More",
    icon: MoreIcon,
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
