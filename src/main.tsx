import React from "react";
import ReactDOM from "react-dom/client";

import { StoreProvider } from "@app/storeProvider";
import App from "@app/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="w-[100dvw] h-[100dvh]">
    <React.StrictMode>
      <StoreProvider>
        <App />
      </StoreProvider>
    </React.StrictMode>
  </div>
);
