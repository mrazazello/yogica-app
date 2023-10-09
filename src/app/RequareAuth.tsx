import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getUserAuthData } from "@entities/user";
import { routePaths } from "@shared/config/router/routes";

function RequireAuth() {
  const userAuth = useSelector(getUserAuthData);
  const location = useLocation();

  return userAuth ? (
    <Outlet />
  ) : (
    <Navigate to={routePaths.login.URL()} state={{ from: location }} replace />
  );
}

export default RequireAuth;
