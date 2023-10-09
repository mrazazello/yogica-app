import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import { Preloader } from "@shared/ui/preloader/Preloader";

import { Routes } from "./Routes";

const App = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(userActions.initAuthData());
  // }, [dispatch]);

  return (
    <Suspense fallback={<Preloader text="Loading component" />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
