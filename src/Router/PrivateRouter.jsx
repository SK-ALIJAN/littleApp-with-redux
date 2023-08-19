import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let Auth = useSelector((store) => {
    return store.AuthReducer.isAuth;
  });
  let location = useLocation();

  return (
    <>
      {Auth ? (
        children
      ) : (
        <Navigate state={location.pathname} to="/login" replace={true} />
      )}
    </>
  );
};

export default PrivateRouter;
