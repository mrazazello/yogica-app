import { RouteObject } from "react-router-dom";

import { ClassAsync } from "@pages/classDatail/ClassAsync";
import { FavoritesAsync } from "@pages/favorites/FavoritesAsync";
import { LoginAsync } from "@pages/login/LoginAsync";
import { MoreAsync } from "@pages/more/MoreAsync";
import { NotFoundAsync } from "@pages/notFound/NotFoundAsync";
import { OrderAsyns } from "@pages/orders/OrderAsyns";
import { ParamsChantingDurationAsync } from "@pages/paramsChantingDuration/ParamsChantingDurationAsync";
import { ParamsExerciseDurationAsync } from "@pages/paramsExerciseDuration/ParamsExerciseDurationAsync";
import { ParamsLevelAsync } from "@pages/paramsLevel/ParamsLevelAsync";
import { ParamsPranoyamaAsync } from "@pages/paramsPranoyama/ParamsPranoyamaAsync";
import { ParamsShavasanaAsync } from "@pages/paramsShavasana/ParamsShavasanaAsync";
import { PaymentsAsyns } from "@pages/payments/PaymentsAsyns";
import { ProfileAsync } from "@pages/profile/ProfileAsync";
import { ProgressAsync } from "@pages/progress/ProgressAsync";
import { RegistrationAsync } from "@pages/registration/RegistrationAsync";
import { StartClassAsync } from "@pages/startClass/StartClassAsync";

enum AppRoutesEnum {
  LOGIN = "login",
  REGISTRATION = "registration",
  NOT_FOUND = "not_found",

  MAIN = "main",
  FAVORITES = "favorites",
  PROGRESS = "progress",
  ORDERS = "orders",
  HISTORY = "history",
  MORE = "more",
  CLASS_DETAIL = "classDetail",
  PROFILE = "profile",
  PARAMS_STEP1 = "params-step1",
  PARAMS_STEP2 = "params-step2",
  PARAMS_STEP3 = "params-step3",
  PARAMS_STEP4 = "params-step4",
  PARAMS_STEP5 = "params-step5"
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
  [AppRoutesEnum.LOGIN]: {
    path: "/login",
    URL: () => "/login"
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
  },
  [AppRoutesEnum.PARAMS_STEP1]: {
    path: "/params-step1",
    URL: () => "/params-step1"
  },
  [AppRoutesEnum.PARAMS_STEP2]: {
    path: "/params-step2",
    URL: () => "/params-step2"
  },
  [AppRoutesEnum.PARAMS_STEP3]: {
    path: "/params-step3",
    URL: () => "/params-step3"
  },
  [AppRoutesEnum.PARAMS_STEP4]: {
    path: "/params-step4",
    URL: () => "/params-step4"
  },
  [AppRoutesEnum.PARAMS_STEP5]: {
    path: "/params-step5",
    URL: () => "/params-step5"
  }
};

type AppRouteProps = RouteObject & {
  authOnly: boolean;
};

export const routeConfig: Record<AppRoutesEnum, AppRouteProps> = {
  [AppRoutesEnum.LOGIN]: {
    path: routePaths.login.path,
    element: <LoginAsync />,
    authOnly: false
  },
  [AppRoutesEnum.REGISTRATION]: {
    path: routePaths.registration.path,
    element: <RegistrationAsync />,
    authOnly: false
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePaths.not_found.path,
    element: <NotFoundAsync />,
    authOnly: false
  },
  // protected routes
  [AppRoutesEnum.MAIN]: {
    path: routePaths.main.path,
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
  },
  [AppRoutesEnum.PARAMS_STEP1]: {
    path: routePaths["params-step1"].path,
    element: <ParamsLevelAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PARAMS_STEP2]: {
    path: routePaths["params-step2"].path,
    element: <ParamsExerciseDurationAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PARAMS_STEP3]: {
    path: routePaths["params-step3"].path,
    element: <ParamsChantingDurationAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PARAMS_STEP4]: {
    path: routePaths["params-step4"].path,
    element: <ParamsPranoyamaAsync />,
    authOnly: true
  },
  [AppRoutesEnum.PARAMS_STEP5]: {
    path: routePaths["params-step5"].path,
    element: <ParamsShavasanaAsync />,
    authOnly: true
  }
};
