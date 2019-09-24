import React from "react";
import { Route, Switch, match } from "react-router-dom";
import LogIn from "../../components/Authentication/LogIn/LogIn";
import Register from "../../components/Authentication/Register/Register";

import "../../components/Authentication/authTapLink.css";
import { TabsWrapper } from "../../components/Authentication/TabsWrapper/TabsWrapper";

interface Props {
  match: match;
}

export const auth: React.FC<Props> = () => {
  return (
    <>
      <TabsWrapper />
      <Switch>
        <Route path={`/auth/login`} component={LogIn} />
        <Route path={`/auth/register`} component={Register} />
      </Switch>
    </>
  );
};
