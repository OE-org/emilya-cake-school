import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";

import { AppProvider } from "./context";
import App from "./App";
import "./index.scss";
import "swiper/css";
import "swiper/css/effect-fade";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
