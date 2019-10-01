import React, { Component, FormEvent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";

import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import {
  Input,
  inputDOMTypes,
  ownInputFieldTypes
} from "../../../shared/Input";
import { isEmailValid, isPasswordValid, IValidator } from "../../../validator";
import { logInUser } from "../../../store/actionCreators/logInUser";
import {
  InputWrapper,
  ErrorsWrapper,
  Error,
  AuthAligner,
  AuthWrapper
} from "../sharedStyledComponents";
import { Props, State } from "../types/logIn";
import { User } from "../../../store/types/user";

const ResetLink = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

class LogIn extends Component<Props, State> {
  noErrorsState = {
    isError: false,
    emailErrorMessage: null,
    passwordErrorMessage: null
  };

  state = {
    passwordField: null,
    emailField: null,
    ...this.noErrorsState
  };

  handleChange = (type: string, value: Nullable<string>) => {
    this.setState({
      ...this.state,
      [type]: value,
      ...this.noErrorsState
    });
  };
  handleEmailChange = this.handleChange.bind(
    this,
    ownInputFieldTypes.emailField
  );
  handlePasswordChange = this.handleChange.bind(
    this,
    ownInputFieldTypes.passwordField
  );

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const id = new Date().valueOf();
    const { emailField, passwordField } = this.state;

    const emailValidation: IValidator = isEmailValid(emailField);
    const passwordValidation: IValidator = isPasswordValid(passwordField);

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
                handleChange={this.handleEmailChange}
                type={inputDOMTypes.email}
                placeholder={"Email Address"}
              />
              <Input
                handleChange={this.handlePasswordChange}
                type={inputDOMTypes.password}
                placeholder={"Password"}
              />
            </InputWrapper>
            <ButtonComponent
              type="submit"
              appearance="warning"
              width="100%"
              height={"41px"}
            >
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
    saveUser: (auth: User) => dispatch(logInUser(auth))
  };
}

const logInComponent = connect(
  null,
  mapDispatchToProps
)(LogIn);
export default logInComponent;
