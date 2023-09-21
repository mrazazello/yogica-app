import { RouteObject, createBrowserRouter } from "react-router-dom";

import { ClassAsync } from "@pages/classDatail/ClassAsync";
import { FavoritesAsync } from "@pages/favorites/FavoritesAsync";
import { LoginAsync } from "@pages/login/LoginAsync";
import { MoreAsync } from "@pages/more/MoreAsync";
import { NotFoundAsync } from "@pages/notFound/NotFoundAsync";
import { OrderAsyns } from "@pages/orders/OrderAsyns";
import { PaymentsAsyns } from "@pages/payments/PaymentsAsyns";
import { ProfileAsync } from "@pages/profile/ProfileAsync";
import { ProgressAsync } from "@pages/progress/ProgressAsync";
import { RegistrationAsync } from "@pages/registration/RegistrationAsync";
import { StartClassAsync } from "@pages/startClass/StartClassAsync";

type AppRouteProps = RouteObject & {
  authOnly?: boolean;
};

enum AppRoutesEnum {
  MAIN = "main",
  REGISTRATION = "registration",
  NOT_FOUND = "not_found",

  START = "start",
  FAVORITES = "favorites",
  PROGRESS = "progress",
  ORDERS = "orders",
  HISTORY = "history",
  MORE = "more",
  CLASS_DETAIL = "classDetail",
  PROFILE = "profile"
}

export const routePaths: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: "/",
  [AppRoutesEnum.REGISTRATION]: "/reg",
  [AppRoutesEnum.NOT_FOUND]: "*",

  [AppRoutesEnum.START]: "/start",
  [AppRoutesEnum.FAVORITES]: "/favorites",
  [AppRoutesEnum.PROGRESS]: "/progress",
  [AppRoutesEnum.ORDERS]: "/orders",
  [AppRoutesEnum.HISTORY]: "/history",
  [AppRoutesEnum.MORE]: "/more",
  [AppRoutesEnum.CLASS_DETAIL]: "/class",
  [AppRoutesEnum.PROFILE]: "/profile"
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
    element: <MoreAsync />,
    authOnly: true
  },
  [AppRoutesEnum.CLASS_DETAIL]: {
    path: routePaths.classDetail,
    element: <ClassAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PROFILE]: {
    path: routePaths.profile,
    element: <ProfileAsync />,
    authOnly: true
  }
};

export const router = createBrowserRouter(Object.values(routeConfig));
