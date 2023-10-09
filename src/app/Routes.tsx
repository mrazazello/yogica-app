import { routeConfig } from "@shared/config/router/routes";
import { useRoutes } from "react-router-dom";
import { PersistLogin } from "./PersistLogin";
import RequireAuth from "./RequareAuth";

const publicPaths = Object.values(routeConfig)
  .filter((item) => item.authOnly === false)
  .map((item) => {
    return {
      path: item.path,
      element: item.element
    };
  });

const privatePaths = Object.values(routeConfig)
  .filter((item) => item.authOnly === true)
  .map((item) => {
    return {
      path: item.path,
      element: item.element
    };
  });

export const Routes = () => {
  return useRoutes([
    ...publicPaths,
    {
      element: <PersistLogin />,
      children: [
        {
          element: <RequireAuth />,
          children: privatePaths
        }
      ]
    }
  ]);
};
