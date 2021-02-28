import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { KittiesScene } from "../../scenes/kitties.scene";
import { PuppiesScene } from "../../scenes/puppies.scene";
import { routes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.kitties} component={KittiesScene} />
        <Route exact path={routes.puppies} component={PuppiesScene} />
        <Redirect from={routes.root} to={routes.puppies} />
      </Switch>
    </Router>
  );
};
