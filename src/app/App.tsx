import { Suspense } from "react";

import { routeConfig } from "@shared/config/router/routes";
import { Preloader } from "@shared/ui/Preloader/Preloader";
import { Route, Routes } from "react-router-dom";

const App = () => {
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
