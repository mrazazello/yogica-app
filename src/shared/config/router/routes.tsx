import { RouteObject, createBrowserRouter } from "react-router-dom";

import { ClassAsync } from "@pages/ClassDatail/ClassAsync";
import { FavoritesAsync } from "@pages/Favorites/FavoritesAsync";
import { LoginAsync } from "@pages/Login/LoginAsync";
import { MoreAsyns } from "@pages/More/MoreAsync";
import { OrderAsyns } from "@pages/Orders/OrderAsyns";
import { PaymentsAsyns } from "@pages/Payments/PaymentsAsyns";
import { ProgressAsync } from "@pages/Progress/ProgressAsync";
import { RegistrationAsync } from "@pages/Registration/RegistrationAsync";
import { StartClassAsync } from "@pages/StartClass/StartClassAsync";

enum AppRoutesEnum {
  MAIN = "main",
  START = "start",
  FAVORITES = "favorites",
  PROGRESS = "progress",
  ORDERS = "orders",
  HISTORY = "history",
  MORE = "more",

  CLASS_DETAIL = "classDetail",

  REGISTRATION = "registration",
  NOT_FOUND = "not_found",
}

export const routePaths: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: "/",
  [AppRoutesEnum.START]: "/start",
  [AppRoutesEnum.FAVORITES]: "/favorites",
  [AppRoutesEnum.PROGRESS]: "/progress",
  [AppRoutesEnum.ORDERS]: "/orders",
  [AppRoutesEnum.HISTORY]: "/history",
  [AppRoutesEnum.MORE]: "/more",

  [AppRoutesEnum.CLASS_DETAIL]: "/class",

  [AppRoutesEnum.REGISTRATION]: "/reg",
  [AppRoutesEnum.NOT_FOUND]: "*",
};

const routeConfig: Record<AppRoutesEnum, RouteObject> = {
  [AppRoutesEnum.MAIN]: {
    path: routePaths.main,
    element: <LoginAsync />,
  },
  [AppRoutesEnum.START]: {
    path: routePaths.start,
    element: <StartClassAsync />,
  },
  [AppRoutesEnum.FAVORITES]: {
    path: routePaths.favorites,
    element: <FavoritesAsync />,
  },
  [AppRoutesEnum.PROGRESS]: {
    path: routePaths.progress,
    element: <ProgressAsync />,
  },
  [AppRoutesEnum.ORDERS]: {
    path: routePaths.orders,
    element: <OrderAsyns />,
  },
  [AppRoutesEnum.HISTORY]: {
    path: routePaths.history,
    element: <PaymentsAsyns />,
  },
  [AppRoutesEnum.MORE]: {
    path: routePaths.more,
    element: <MoreAsyns />,
  },
  [AppRoutesEnum.CLASS_DETAIL]: {
    path: routePaths.classDetail,
    element: <ClassAsync />,
  },

  [AppRoutesEnum.REGISTRATION]: {
    path: routePaths.registration,
    element: <RegistrationAsync />,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <RegistrationAsync />,
  },
};

export const router = createBrowserRouter(Object.values(routeConfig));
