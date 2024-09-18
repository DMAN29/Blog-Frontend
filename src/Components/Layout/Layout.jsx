import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="fixed w-full top-0 z-10">
          <Navbar />
        </div>

        <div className="flex-grow py-20">
          <Outlet />
        </div>

        <div className="fixed w-full bottom-0 z-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
