import React from "react";
import { Route, Switch, match } from "react-router-dom";

import LogIn from "../../components/Authentication/LogIn";
import Register from "../../components/Authentication/Register/Register";
import { TabsWrapper } from "../../components/Authentication/TabsWrapper/TabsWrapper";
import { paths } from "../../router/paths";

interface Props {
  match: match;
}

export const auth: React.FC<Props> = () => {
  return (
    <>
      <TabsWrapper />
      <Switch>
        <Route path={paths.login} component={LogIn} />
        <Route path={paths.register} component={Register} />
      </Switch>
    </>
  );
};
