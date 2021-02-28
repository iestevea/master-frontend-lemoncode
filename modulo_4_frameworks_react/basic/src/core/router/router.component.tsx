import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  EmployeeDetailScene,
  EmployeesListScene,
  LoginScene,
} from "../../scenes";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={switchRoutes.root} component={LoginScene} />
        <Route
          exact
          path={switchRoutes.employees}
          component={EmployeesListScene}
        />
        <Route
          exact
          path={switchRoutes.detailEmployee}
          component={EmployeeDetailScene}
        />
      </Switch>
    </Router>
  );
};
