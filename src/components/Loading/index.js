import React from "react";
import "./loading.css";
import { Spin, Space } from "antd";

const Loading = () => {
  return (
    <div className="loading-container center">
      <Space size="middle">
        <Spin size="large" />
      </Space>
      ,
    </div>
  );
};

export default Loading;
