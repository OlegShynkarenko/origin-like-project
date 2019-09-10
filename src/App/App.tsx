import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { authentication } from "../pages/authentication";
import { Main } from "../components/Main/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={authentication} />
        <Route exact path="/register" component={authentication} />
        <Route exact path="/reset-password" component={authentication} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
