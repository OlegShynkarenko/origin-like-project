import React, { Component, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";

import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { Input } from "../../shared/Input/Input";
import {
  emailValidator,
  passwordValidator
} from "../../../utils/validator/validator";
import { logInUser } from "../../../store/actionCreators/logInUser";
import {
  InputWrapper,
  ErrorsWrapper,
  Error,
  AuthAligner,
  AuthWrapper
} from "../sharedStyledComponents";
import { authObject, Props, State } from "./interfaces";

const ResetLink = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

class LogIn extends Component<Props, State> {
  state = {
    authType: "Login",
    inputData: {
      passwordField: "",
      emailField: ""
    },
    isError: false,
    emailErrorMessage: "",
    passwordErrorMessage: ""
  };

  handleChange = (event: any) => {
    const inputValue = event.target.value;
    const inputType = event.target.type;
    if (inputType === "email") {
      this.setState({
        ...this.state,
        inputData: { ...this.state.inputData, emailField: inputValue },
        isError: false,
        emailErrorMessage: "",
        passwordErrorMessage: ""
      });
    } else if (inputType === "password") {
      this.setState({
        ...this.state,
        inputData: { ...this.state.inputData, passwordField: inputValue },
        isError: false,
        emailErrorMessage: "",
        passwordErrorMessage: ""
      });
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const id = new Date().valueOf();
    const {
      inputData: { emailField, passwordField }
    } = this.state;

    const emailValidation = emailValidator(emailField);
    const passwordValidation = passwordValidator(passwordField);

    if (emailValidation.isValid && passwordValidation.isValid) {
      this.props.saveUser({
        id,
        email: emailField,
        password: passwordField
      });
      this.props.history.push("/");
    } else {
      this.setState(() => {
        return {
          ...this.state,
          isError: true,
          emailErrorMessage: emailValidation.message,
          passwordErrorMessage: passwordValidation.message
        };
      });
    }
  };

  render() {
    return (
      <AuthAligner>
        <AuthWrapper>
          <h3>Log in with your account</h3>
          <form onSubmit={this.handleSubmit} noValidate>
            <InputWrapper>
              <Input
                handleChange={this.handleChange}
                type="email"
                placeholder={"Email Address"}
              />
              <Input
                handleChange={this.handleChange}
                type="password"
                placeholder={"Password"}
              />
            </InputWrapper>
            <ButtonComponent type="submit" appearance="warning" width="100%">
              Log in
            </ButtonComponent>
          </form>
          <ErrorsWrapper>
            <Error>{this.state.emailErrorMessage}</Error>
            <Error>{this.state.passwordErrorMessage}</Error>
          </ErrorsWrapper>
          <ResetLink>
            <NavLink to={"/reset-password"}>Forget your password?</NavLink>
          </ResetLink>
        </AuthWrapper>
      </AuthAligner>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    saveUser: (auth: authObject) => dispatch(logInUser(auth))
  };
}

const logInComponent = connect(
  null,
  mapDispatchToProps
)(LogIn);
export default logInComponent;
