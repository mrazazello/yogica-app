import { Suspense, useEffect } from "react";

import { userActions } from "@entities/user/model/slice/userSlice";
import { routeConfig } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Preloader } from "@shared/ui/Preloader/Preloader";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback={<Preloader text="Loading content" />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
