import { router } from "app/routes.tsx";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Preloader } from "shared/ui/Preloader/Preloader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
