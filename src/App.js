import React from "react";
import AOS from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./helpers/ScropToTop";
import "aos/dist/aos.css";
import {
  CakeBaku,
  CakeSchool,
  Catering,
  Error,
  Home,
  SharedLayout,
} from "./pages";
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cake-baku" element={<CakeBaku />} />
          <Route path="cake-school" element={<CakeSchool />} />
          <Route path="catering" element={<Catering />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
