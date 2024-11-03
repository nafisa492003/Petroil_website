import React from "react";
import Nav_bar from "./Nav_bar";
import { Outlet } from "react-router-dom";
import Sub_Nav_bar from "./Sub_Nav_bar";

const Rootlayout = () => {
  return (
    <>
    <Sub_Nav_bar/>
      <Nav_bar />
      <Outlet/>
    </>
  );
};

export default Rootlayout;
