import React from "react";
import ReactDOM from "react-dom/client";
import "react-alice-carousel/lib/alice-carousel.css";

import { AppProvider } from "./context";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
