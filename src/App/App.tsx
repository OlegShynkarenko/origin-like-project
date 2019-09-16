import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LogIn from "../components/Authentication/LogIn/LogIn";
import { ResetPassword } from "../components/Authentication/ResetPassword/ResetPassword";
import { Main } from "../components/Main/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LogIn} />
        {/*<Route exact path="/register" component={authentication} />*/}
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
