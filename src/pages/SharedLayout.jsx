import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
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
