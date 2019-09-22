import React, { FormEvent, Component } from "react";
import styled from "styled-components";
import { History } from "history";
import Recaptcha from "reaptcha";
import { Data } from "../../types/register";

import {
  Error,
  ErrorsWrapper,
  InputWrapper
} from "../../sharedStyledComponents";
import { Input } from "../../../shared/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import {
  isEmailValid,
  isPasswordValid,
  isTextValid
} from "../../../../utils/validator/validator";

interface Props {
  history: History;
  submitData: (data: Data, type: string) => void;
}

interface State {
  emailField: string;
  passwordField: string;
  firstName: string;
  lastName: string;
  isError: boolean;
  emailErrorMessage: string | undefined;
  passwordErrorMessage: string | undefined;
  textFieldErrorMessage: string;
  verified: boolean;
}

const Heading = styled.h4`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FieldTypes = {
  email: "email",
  password: "password",
  firstName: "firstName",
  lastName: "lastName"
};

export class RegisterStepTwo extends Component<Props, State> {
  noErrorsState = {
    isError: false,
    emailErrorMessage: "",
    passwordErrorMessage: "",
    textFieldErrorMessage: ""
  };

  state = {
    emailField: "",
    passwordField: "",
    firstName: "",
    lastName: "",
    verified: false,
    ...this.noErrorsState
  };

  onBackButtonClick = () => {
    this.props.history.push("/register");
  };

  mapTypeToStateField = {
    [FieldTypes.email]: "emailField",
    [FieldTypes.password]: "passwordField",
    [FieldTypes.firstName]: "firstName",
    [FieldTypes.lastName]: "lastName"
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
    const { emailField, passwordField, firstName, lastName } = this.state;

    const emailValidation = isEmailValid(emailField);
    const passwordValidation = isPasswordValid(passwordField);
    const firstNameValidation = isTextValid(firstName);
    const lastNameValidation = isTextValid(lastName);

    if (
      emailValidation.isValid &&
      passwordValidation.isValid &&
      this.state.verified
    ) {
      this.props.submitData(
        {
          email: this.state.emailField,
          password: this.state.passwordField,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        },
        "step_2"
      );
    } else {
      this.setState({
        ...this.state,
        isError: true,
        emailErrorMessage: emailValidation.message,
        passwordErrorMessage: passwordValidation.message,
        textFieldErrorMessage: `${firstNameValidation.message ||
          lastNameValidation.message ||
          ""}`
      });
    }
  };

  onVerify = (response: string) => {
    if (response !== "") {
      this.setState({ ...this.state, verified: true });
    }
  };

  render() {
    return (
      <>
        <Wrapper>
          <h3>Create your account</h3>
          <ButtonComponent onClick={this.onBackButtonClick} type="button">
            Back
          </ButtonComponent>
        </Wrapper>
        <form noValidate onSubmit={this.handleSubmit}>
          <InputWrapper>
            <Input
              type="email"
              role="email"
              placeholder="Email Address"
              handleChange={this.handleChange}
            />
            <Input
              type="password"
              role="password"
              placeholder="Password"
              handleChange={this.handleChange}
            />
          </InputWrapper>
          <ErrorsWrapper>
            <Error>{this.state.emailErrorMessage}</Error>
            <Error>{this.state.passwordErrorMessage}</Error>
          </ErrorsWrapper>
          <InputWrapper>
            <Heading>People can find me by searching ...</Heading>
            <Input
              type="text"
              role="firstName"
              placeholder="First Name"
              handleChange={this.handleChange}
            />
            <Input
              type="text"
              role="lastName"
              placeholder="Last Name"
              handleChange={this.handleChange}
            />
          </InputWrapper>
          <ErrorsWrapper>
            <Error>{this.state.textFieldErrorMessage}</Error>
          </ErrorsWrapper>
          <InputWrapper>
            <Recaptcha
              sitekey="6LcaWbkUAAAAALyJNkY6AshzTP1TKeGs8BLMJO9k"
              onVerify={this.onVerify}
              badge="inline"
            />
          </InputWrapper>
          <ButtonComponent
            type="submit"
            height={"41px"}
            appearance="warning"
            width="100%"
          >
            Complete registration
          </ButtonComponent>
        </form>
      </>
    );
  }
}
