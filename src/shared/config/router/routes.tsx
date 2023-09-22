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

type URLFuncType = (() => string) | ((id?: string) => string);

interface IRoutePath {
  path: string;
  URL: URLFuncType;
}

export const routePaths: Record<AppRoutesEnum, IRoutePath> = {
  [AppRoutesEnum.MAIN]: {
    path: "/",
    URL: () => "/"
  },
  [AppRoutesEnum.REGISTRATION]: {
    path: "/reg",
    URL: () => "/reg"
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: "*",
    URL: () => "*"
  },
  // private paths
  [AppRoutesEnum.START]: {
    path: "/start",
    URL: () => "/start"
  },
  [AppRoutesEnum.FAVORITES]: {
    path: "/favorites",
    URL: () => "/favorites"
  },
  [AppRoutesEnum.PROGRESS]: {
    path: "/progress",
    URL: () => "/progress"
  },
  [AppRoutesEnum.ORDERS]: {
    path: "/orders",
    URL: () => "/orders"
  },
  [AppRoutesEnum.HISTORY]: {
    path: "/history",
    URL: () => "/history"
  },
  [AppRoutesEnum.MORE]: {
    path: "/more",
    URL: () => "/more"
  },
  [AppRoutesEnum.CLASS_DETAIL]: {
    path: "/class/:id",
    URL: (id?: string) => `/class/${id}`
  },
  [AppRoutesEnum.PROFILE]: {
    path: "/profile",
    URL: () => "/profile"
  }
};

type AppRouteProps = RouteObject & {
  authOnly?: boolean;
};

export const routeConfig: Record<AppRoutesEnum, AppRouteProps> = {
  [AppRoutesEnum.MAIN]: {
    path: routePaths.main.path,
    element: <LoginAsync />
  },
  [AppRoutesEnum.REGISTRATION]: {
    path: routePaths.registration.path,
    element: <RegistrationAsync />
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePaths.not_found.path,
    element: <NotFoundAsync />
  },
  // protected routes
  [AppRoutesEnum.START]: {
    path: routePaths.start.path,
    element: <StartClassAsync />,
    authOnly: true
  },
  [AppRoutesEnum.FAVORITES]: {
    path: routePaths.favorites.path,
    element: <FavoritesAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PROGRESS]: {
    path: routePaths.progress.path,
    element: <ProgressAsync />,
    authOnly: true
  },
  [AppRoutesEnum.ORDERS]: {
    path: routePaths.orders.path,
    element: <OrderAsyns />,
    authOnly: true
  },
  [AppRoutesEnum.HISTORY]: {
    path: routePaths.history.path,
    element: <PaymentsAsyns />,
    authOnly: true
  },
  [AppRoutesEnum.MORE]: {
    path: routePaths.more.path,
    element: <MoreAsync />,
    authOnly: true
  },
  [AppRoutesEnum.CLASS_DETAIL]: {
    path: routePaths.classDetail.path,
    element: <ClassAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PROFILE]: {
    path: routePaths.profile.path,
    element: <ProfileAsync />,
    authOnly: true
  }
};

export const router = createBrowserRouter(Object.values(routeConfig));
