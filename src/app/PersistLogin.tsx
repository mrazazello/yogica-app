import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { getUserAuthData, userActions } from "@entities/user";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Preloader } from "@shared/ui/preloader/Preloader";

export const PersistLogin = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getUserAuthData);
  const [isTokenLoading, setIsTokenLoading] = useState(!isAuth);

  useEffect(() => {
    dispatch(userActions.initAuthData());
    setIsTokenLoading(false);
  }, [dispatch]);

  return isTokenLoading ? <Preloader text="Authorizing..." /> : <Outlet />;
};
