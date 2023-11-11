import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRouteAdmin = (props) => {
  const { element } = props;
  const isAuthenticated = useSelector(
    (state) => state.adminAuth.isAuthenticated
  );
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

export default ProtectedRouteAdmin;
