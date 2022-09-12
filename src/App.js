import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cakebaku from "./pages/CakeBaku";
import Home from "./pages/Home";

import SharedLayout from "./pages/SharedLayout";
import CakeSchool from "./pages/CakeSchool";
import Catering from "./pages/Catering";
import Error from "./pages/Error";
import ScrollToTop from "./helpers/ScropToTop";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cake-baku" element={<Cakebaku />} />
          <Route path="cake-school" element={<CakeSchool />} />
          <Route path="catering" element={<Catering />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
