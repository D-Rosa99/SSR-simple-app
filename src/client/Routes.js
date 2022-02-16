import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

const RouteConfig = () => {
  return (
    <div>
      <Route exact path={"/"} component={Home} />
      <Route path={"/hi"} component={() => "Hi there"} />
    </div>
  );
};

export default RouteConfig;
