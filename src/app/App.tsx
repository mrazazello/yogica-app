import { Suspense, useEffect, useMemo } from "react";

import { getUserAuthData } from "@entities/user/model/selectors/getUserAuthData/getUserAuthData";
import { userActions } from "@entities/user/model/slice/userSlice";
import { routeConfig } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

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
