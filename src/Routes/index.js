import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginScreen from "../screens/LoginScreen";
import MainRoutes from "./MainRoutes";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <ProtectedRoute path="/" component={MainRoutes} />
      </Switch>
    </Router>
  );
};

export default index;
