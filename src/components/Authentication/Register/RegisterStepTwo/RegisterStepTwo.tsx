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
import {
  Input,
  inputDOMTypes,
  ownInputFieldTypes
} from "../../../../shared/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import {
  isEmailValid,
  isPasswordValid,
  isTextValid
} from "../../../../validator";

interface Props {
  history: History;
  submitData: (data: Data, type: "step_1" | "step_2") => void;
}

interface State {
  emailField: Nullable<string>;
  passwordField: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  isError: boolean;
  emailErrorMessage: Nullable<string>;
  passwordErrorMessage: Nullable<string>;
  textFieldErrorMessage: Nullable<string>;
  verified: boolean;
}

const Heading = styled.h4`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export class RegisterStepTwo extends Component<Props, State> {
  noErrorsState = {
    isError: false,
    emailErrorMessage: null,
    passwordErrorMessage: null,
    textFieldErrorMessage: null
  };

  state = {
    emailField: null,
    passwordField: null,
    firstName: null,
    lastName: null,
    verified: false,
    ...this.noErrorsState
  };

  onBackButtonClick = () => {
    this.props.history.push("/auth/register");
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
  handleFirstNameChange = this.handleChange.bind(
    this,
    ownInputFieldTypes.firstName
  );
  handleLastNameChange = this.handleChange.bind(
    this,
    ownInputFieldTypes.lastName
  );

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
          country: null,
          day: null,
          month: null,
          year: null,
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
              type={inputDOMTypes.email}
              placeholder="Email Address"
              handleChange={this.handleEmailChange}
            />
            <Input
              type={inputDOMTypes.password}
              placeholder="Password"
              handleChange={this.handlePasswordChange}
            />
          </InputWrapper>
          <ErrorsWrapper>
            <Error>{this.state.emailErrorMessage}</Error>
            <Error>{this.state.passwordErrorMessage}</Error>
          </ErrorsWrapper>
          <InputWrapper>
            <Heading>People can find me by searching ...</Heading>
            <Input
              type={inputDOMTypes.text}
              placeholder="First Name"
              handleChange={this.handleFirstNameChange}
            />
            <Input
              type={inputDOMTypes.text}
              placeholder="Last Name"
              handleChange={this.handleLastNameChange}
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
