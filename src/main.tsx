import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@app/App";
import { StoreProvider } from "@app/storeProvider";

import "./index.css";
import { setupAxios } from "@shared/api/api";

setupAxios();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="w-screen h-screen">
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
