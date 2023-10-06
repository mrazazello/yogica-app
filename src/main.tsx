import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@app/App";
import { StoreProvider } from "@app/storeProvider";

import { setupAxios } from "@shared/api/api";
import "./index.css";

setupAxios();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="w-[100dvw] h-[100dvh]">
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
