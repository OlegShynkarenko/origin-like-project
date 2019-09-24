import React from "react";
import { Switch, Route } from "react-router-dom";

import LogIn from "../components/Authentication/LogIn/LogIn";
import { ResetPassword } from "../components/Authentication/ResetPassword/ResetPassword";
import { Main } from "../components/Main/Main";
import Register from "../components/Authentication/Register/Register";
import { Router } from "../router/Router";
import { paths } from "../router/paths";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={paths.login} component={LogIn} />
        <Route path={paths.register} component={Register} />
        <Route exact path={paths.resetPassword} component={ResetPassword} />
        <Route path={paths.root} component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
