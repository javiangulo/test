import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import ShowSkill from "./pages/ShowSkill";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={ShowSkill} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
