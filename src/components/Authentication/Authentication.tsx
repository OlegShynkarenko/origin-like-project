import React, { Component, FormEvent } from "react";

import { LogIn } from "./LogIn/LogIn";
import { ResetPassword } from "./ResetPassword/ResetPassword";

interface Props {
  path: string;
}

export class Authentication extends Component<Props> {
  state = {
    shouldReset: false
  };

  handleRedirectOnPasswordReset = () => {
    this.setState({ shouldReset: true });
  };

  handleDataSubmission = (inputData: object) => {
    console.log(inputData);

    this.handleRedirectOnPasswordReset();
    setTimeout(() => {
      this.setState({ shouldReset: false });
    }, 2);
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
            redirect={this.state.shouldReset}
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
