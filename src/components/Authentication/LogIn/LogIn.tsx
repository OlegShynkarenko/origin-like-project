import React, { Component, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";

import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { Input } from "../../shared/Input";
import {
  isEmailValid,
  isPasswordValid
} from "../../../utils/validator/validator";
import { logInUser } from "../../../store/actionCreators/logInUser";
import {
  InputWrapper,
  ErrorsWrapper,
  Error,
  AuthAligner,
  AuthWrapper
} from "../sharedStyledComponents";
import { authObject, Props, State } from "../types/logIn";

const ResetLink = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const FieldTypes = {
  email: "email",
  password: "password"
};

class LogIn extends Component<Props, State> {
  noErrorsState = {
    isError: false,
    emailErrorMessage: "",
    passwordErrorMessage: ""
  };

  state = {
    passwordField: "",
    emailField: "",
    ...this.noErrorsState
  };

  mapTypeToStateField = {
    [FieldTypes.email]: "emailField",
    [FieldTypes.password]: "passwordField"
  };

  handleChange = (value: string, type: string) => {
    const field = this.mapTypeToStateField[type];

    this.setState({
      ...this.state,
      [field]: value,
      ...this.noErrorsState
    });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const id = new Date().valueOf();
    const { emailField, passwordField } = this.state;

    const emailValidation = isEmailValid(emailField);
    const passwordValidation = isPasswordValid(passwordField);

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
          ...this.noErrorsState,
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
                role="email"
                placeholder={"Email Address"}
              />
              <Input
                handleChange={this.handleChange}
                type="password"
                role="password"
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
