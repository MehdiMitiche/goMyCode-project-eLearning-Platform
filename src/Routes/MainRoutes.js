import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SingleCourseScreen from "../screens/SingleCourseScreen";
import Navbar from "../components/Navabar";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/course/:id" exact>
          <SingleCourseScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </>
  );
};

export default MainRoutes;
