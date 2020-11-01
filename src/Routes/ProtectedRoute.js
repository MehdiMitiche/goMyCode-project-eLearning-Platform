import React from "react";
import { isLoggedIn } from "../helpers";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ path, component }) => {
  if (isLoggedIn()) return <Route path={path}>{component}</Route>;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
