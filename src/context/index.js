import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(0);

  const showSlide = (slide) => {
    setToggler(!toggler);
    setSlide(slide);
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const state = {
    menuToggle,
    setMenuToggle,
    slide,
    showSlide,
    toggler,
    isLoading,
  };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
