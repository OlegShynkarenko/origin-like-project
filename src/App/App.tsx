import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { ResetPassword } from "../components/Authentication/ResetPassword/ResetPassword";
import { Main } from "../components/Main/Main";
import { Router } from "../router/Router";
import { paths } from "../router/paths";
import { auth } from "../pages/auth/auth";
import { Dispatch } from "redux";
import { getGamesList } from "@store/actionCreators/getGamesList";
import { connect } from "react-redux";

interface Props {
  saveGames: () => void;
}

// @ts-ignore
export const App: React.FC = (props: Props) => {
  return (
    <Router>
      <Switch>
        <Route path={paths.auth} component={auth} />
        <Route exact path={paths.resetPassword} component={ResetPassword} />
        <Route path={paths.root} component={Main} />
      </Switch>
    </Router>
  );
};
