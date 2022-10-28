import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header, Loader } from "../components";
import { useGlobalContext } from "../context";

const SharedLayout = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default SharedLayout;
