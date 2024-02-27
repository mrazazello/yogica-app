import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Preloader } from "@shared/ui/preloader/Preloader";

import { Routes } from "./Routes";

const App = () => {
  return (
    <Suspense fallback={<Preloader text="Loading component" />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
