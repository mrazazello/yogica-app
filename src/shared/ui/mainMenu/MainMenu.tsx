import { FC } from "react";

import { routePaths } from "@shared/config/router/routes";

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
    url: routePaths.start.URL()
  },
  {
    title: "Favorite",
    icon: FavoriteIcon,
    url: routePaths.favorites.URL()
  },
  {
    title: "Progress",
    icon: ProgressIcon,
    url: routePaths.progress.URL()
  },
  {
    title: "Orders",
    icon: OrdersIcon,
    url: routePaths.orders.URL()
  },
  {
    title: "More",
    icon: MoreIcon,
    url: routePaths.more.URL()
  }
];

export const MainMenu: FC<IProps> = () => {
  const location = window.location.pathname;

  return (
    <div className="w-full h-16 p-10px flex justify-between bg-blue-400 text-white">
      {mainMenuItems.map((item) => (
        <MainMenuItem
          key={item.title}
          item={item}
          current={location === item.url}
        />
      ))}
    </div>
  );
};
