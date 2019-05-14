/*
 * @Author: shenxsh
 * @Date: 2019-05-14 14:31:43
 * @LastEditTime: 2019-05-14 14:57:37
 * @LastEditors: Do not edit
 * @Description: 描述
 */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Nomatch from "./pages/nomatch";
export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={Nomatch} />
              </Admin>
            )}
          />
        </App>
      </HashRouter>
    );
  }
}
