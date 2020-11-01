import React from "react";
import "./App.css";
import "antd/dist/res.css"; // or 'antd/dist/antd.less'
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
}

export default App;
