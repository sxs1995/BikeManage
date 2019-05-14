import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import About from "./About";
import Main from "./Main";

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
          <hr />
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}
