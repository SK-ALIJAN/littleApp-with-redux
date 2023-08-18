import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Admin from "../components/Admin";
import PrivateRouter from "./PrivateRouter";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRouter;
