import React, { Component } from "react";
import { connect } from "react-redux";

import { LogIn } from "./LogIn/LogIn";
import { ResetPassword } from "./ResetPassword/ResetPassword";
import { saveUser } from "../../store/actionCreators/saveUser";

interface Props {
  path: string;
  history: any;
  saveUser: () => void;
}

interface InputData {
  emailField: string;
  passwordField: string;
  authType: string;
}

class Authentication extends Component<Props> {
  handleRedirect = (authType: string) => {
    if (authType === "reset password") {
      this.props.history.push("/login");
    } else if (authType === "Login") {
      this.props.history.push("/");
    }
  };

  handleDataSubmission = (inputData: InputData) => {
    // @ts-ignore
    const {
      authType,
      inputData: { emailField, passwordField }
    } = inputData;
    const id = new Date().valueOf();
    if (inputData.authType === "Login") {
      // @ts-ignore
      this.props.saveUser({
        id: id,
        email: emailField,
        password: passwordField
      });
    }

    this.handleRedirect(authType);
  };

  handleAuthPath = (path: string) => {
    switch (path) {
      case "/login":
        // @ts-ignore
        return <LogIn submitData={this.handleDataSubmission} />;
      case "/register":
        return <p>Register component</p>;
      case "/reset-password":
        return (
          <ResetPassword
            // @ts-ignore
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

function mapDispatchToProps(
  dispatch: (arg0: { type: string; payload: object }) => void
) {
  return {
    saveUser: (user: object) => dispatch(saveUser(user))
  };
}

// @ts-ignore
const AuthComponent = connect(
  null,
  mapDispatchToProps
)(Authentication);
export default AuthComponent;
