import { Suspense, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { getUserAuthData, userActions } from "@entities/user";
import { routeConfig } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Preloader } from "@shared/ui/preloader/Preloader";

const App = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector(getUserAuthData);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((item) => {
        if (item.authOnly && !auth) return false;
        return true;
      }),
    [auth]
  );

  return (
    <Suspense fallback={<Preloader text="Loading content" />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
