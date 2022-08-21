import React, { createContext, useContext } from "react";

const AppContext = createContext();

const state = { value: "hello" };

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
