import React from "react";
import "./error.css";
import { Empty } from "antd";

const Error = () => {
  return (
    <div className="error-container">
      <Empty description={"Connection Failed !"} />
    </div>
  );
};

export default Error;
