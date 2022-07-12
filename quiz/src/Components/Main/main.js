import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Content from "./content";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

const Main = () => {
  // const navigate = useNavigate();
  return (
    <div className="Main">
      <Navbar />
      <Content />
      <Outlet />
    </div>
  );
};

export default Main;
