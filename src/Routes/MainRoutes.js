import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SingleCourseScreen from "../screens/SingleCourseScreen";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/course" exact>
        <SingleCourseScreen />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
};

export default MainRoutes;
