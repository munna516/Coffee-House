import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-11/12 mx-auto mt-3">
        <Navbar></Navbar>
      </nav>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
