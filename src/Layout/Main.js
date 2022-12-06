import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
};

export default Main;
