import { createBrowserRouter } from "react-router-dom";

import { LoginAsync } from "pages/Login/LoginAsync";
import { RegistrationAsync } from "pages/Registration/RegistrationAsync";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginAsync />,
  },
  {
    path: "/reg",
    element: <RegistrationAsync />,
  },
]);
