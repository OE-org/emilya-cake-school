import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(0);

  const showSlide = (slide) => {
    setToggler(!toggler);
    setSlide(slide);
  };

  const state = { menuToggle, setMenuToggle, slide, showSlide, toggler };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
