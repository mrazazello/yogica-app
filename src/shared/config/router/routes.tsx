import { RouteObject, createBrowserRouter } from "react-router-dom";

import { ClassAsync } from "@pages/ClassDatail/ClassAsync";
import { FavoritesAsync } from "@pages/Favorites/FavoritesAsync";
import { LoginAsync } from "@pages/Login/LoginAsync";
import { MoreAsyns } from "@pages/More/MoreAsync";
import { NotFoundAsync } from "@pages/NotFound/NotFoundAsync";
import { OrderAsyns } from "@pages/Orders/OrderAsyns";
import { PaymentsAsyns } from "@pages/Payments/PaymentsAsyns";
import { ProgressAsync } from "@pages/Progress/ProgressAsync";
import { RegistrationAsync } from "@pages/Registration/RegistrationAsync";
import { StartClassAsync } from "@pages/StartClass/StartClassAsync";

type AppRouteProps = RouteObject & {
  authOnly?: boolean;
};

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
  NOT_FOUND = "not_found"
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
  [AppRoutesEnum.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutesEnum, AppRouteProps> = {
  [AppRoutesEnum.MAIN]: {
    path: routePaths.main,
    element: <LoginAsync />
  },
  [AppRoutesEnum.REGISTRATION]: {
    path: routePaths.registration,
    element: <RegistrationAsync />
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundAsync />
  },
  // protected routes
  [AppRoutesEnum.START]: {
    path: routePaths.start,
    element: <StartClassAsync />,
    authOnly: true
  },
  [AppRoutesEnum.FAVORITES]: {
    path: routePaths.favorites,
    element: <FavoritesAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PROGRESS]: {
    path: routePaths.progress,
    element: <ProgressAsync />,
    authOnly: true
  },
  [AppRoutesEnum.ORDERS]: {
    path: routePaths.orders,
    element: <OrderAsyns />,
    authOnly: true
  },
  [AppRoutesEnum.HISTORY]: {
    path: routePaths.history,
    element: <PaymentsAsyns />,
    authOnly: true
  },
  [AppRoutesEnum.MORE]: {
    path: routePaths.more,
    element: <MoreAsyns />,
    authOnly: true
  },
  [AppRoutesEnum.CLASS_DETAIL]: {
    path: routePaths.classDetail,
    element: <ClassAsync />,
    authOnly: true
  }
};

export const router = createBrowserRouter(Object.values(routeConfig));
