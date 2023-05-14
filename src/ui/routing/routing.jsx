import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import LoginRouter from "./login-routing/login-routing";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <LoginRouter />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
