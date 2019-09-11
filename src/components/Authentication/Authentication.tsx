import React, { Component } from "react";

import { LogIn } from "./LogIn/LogIn";
import { ResetPassword } from "./ResetPassword/ResetPassword";

interface Props {
  path: string;
  history: any;
}

export class Authentication extends Component<Props> {
  handleRedirectOnPasswordReset = () => {
    this.props.history.push("/login");
  };

  handleDataSubmission = (inputData: object) => {
    console.log("Submitted data", inputData);

    this.handleRedirectOnPasswordReset();
  };

  handleAuthPath = (path: string) => {
    switch (path) {
      case "/login":
        return <LogIn submitData={this.handleDataSubmission} />;
      case "/register":
        return <p>Register component</p>;
      case "/reset-password":
        return (
          <ResetPassword
            click={this.handleRedirectOnPasswordReset}
            submitData={this.handleDataSubmission}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { path } = this.props;
    const authPath = this.handleAuthPath(path);

    return <div>{authPath}</div>;
  }
}
