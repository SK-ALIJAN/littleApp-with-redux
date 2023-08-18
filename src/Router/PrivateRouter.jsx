import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let Auth = useSelector((store) => {
    return store.AuthReducer.isAuth;
  });

  return <>{Auth ? children : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
