import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginScreen from "../screens/LoginScreen";
import MainRoutes from "./MainRoutes";
import TestScreen from "../screens/TestScreen";
import { isLoggedIn } from "../helpers";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <ProtectedRoute path="/" component={TestScreen} />
      </Switch>
    </Router>
  );
};

export default index;
