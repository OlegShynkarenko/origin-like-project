import React, { Component, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";

import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { Input, InputEvent } from "../../shared/Input/Input";
import {
  emailValidator,
  passwordValidator
} from "../../../utils/validator/validator";
import { saveUser } from "../../../store/actionCreators/saveUser";
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

const FiledTypes = {
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
    authType: "Login",
    inputData: {
      passwordField: "",
      emailField: ""
    },
    ...this.noErrorsState
  };

  mapTypeToStateField = {
    [FiledTypes.email]: "emailField",
    [FiledTypes.password]: "passwordField"
  };

  handleChange = (event: InputEvent) => {
    const value = event.currentTarget.value;
    const field = this.mapTypeToStateField[event.currentTarget.type];

    this.setState({
      inputData: { ...this.state.inputData, [field]: value },
      ...this.noErrorsState
    });
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
                placeholder={"Type your email example@example.com"}
              />
              <Input
                handleChange={this.handleChange}
                type="password"
                placeholder={"Type your password"}
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
    saveUser: (auth: authObject) => dispatch(saveUser(auth))
  };
}

const logInComponent = connect(
  null,
  mapDispatchToProps
)(LogIn);
export default logInComponent;
