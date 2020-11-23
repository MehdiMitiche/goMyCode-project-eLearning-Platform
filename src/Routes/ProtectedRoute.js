import React from "react";
import { isLoggedIn } from "../helpers";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component, path }) => {
  console.log("IS LOGGED IN");
  console.log(isLoggedIn());
  if (!isLoggedIn()) return <Redirect to="/login" />;
  return <Route path={path}>{component}</Route>;
};

export default ProtectedRoute;
