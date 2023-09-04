import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "shared/config/router/routes";
import { Preloader } from "shared/ui/Preloader/Preloader";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="w-screen h-screen">
    <React.StrictMode>
      <Suspense fallback={<Preloader />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  </div>
);
