import "babel-polyfill";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";

const RouteConfig = () => {
  return (
    <div>
      <Route exact path={"/"} component={Home} />
      <Route path={"/users"} component={UserList} />
    </div>
  );
};

export default RouteConfig;
