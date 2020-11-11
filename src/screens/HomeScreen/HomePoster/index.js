import React from "react";
import Poster from "../../../components/Poster";
import { Button, Input } from "antd";
import "./homePoster.css";

const HomePoster = () => {
  return (
    <Poster style={{ height: "65vh" }}>
      <div className="home-poster-title">
        The world's largest selection of courses with new additions published
        every month !
      </div>
      <div className="home-poster-content">
        <Input size="large" className="home-poster-search" />
        <Button size="large" type="primary" className="home-poster-search-btn">
          Search
        </Button>
      </div>
    </Poster>
  );
};

export default HomePoster;
