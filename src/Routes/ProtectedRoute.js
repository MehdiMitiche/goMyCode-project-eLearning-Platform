import React from "react";
import { isLoggedIn } from "../helpers";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component, path }) => {
  if (!isLoggedIn()) return <Redirect to="/login" />;
  return <Route path={path}>{component}</Route>;
};

export default ProtectedRoute;
