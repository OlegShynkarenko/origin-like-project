import React, { FormEvent, Component } from "react";
import styled from "styled-components";
import { History } from "history";
import Recaptcha from "reaptcha";

import {
  Error,
  ErrorsWrapper,
  InputWrapper
} from "../../sharedStyledComponents";
import { Input } from "../../../shared/Input/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import {
  emailValidator,
  passwordValidator,
  textValidator
} from "../../../../utils/validator/validator";

interface Props {
  history: History;
  submitData: (data: Data, type: string) => void;
}

interface Data {
  country?: string;
  date?: string;
  month?: string;
  year?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

interface State {
  emailField?: string;
  passwordField?: string;
  firstName?: string;
  lastName?: string;
  isError: boolean;
  emailErrorMessage: string | undefined;
  passwordErrorMessage: string | undefined;
  textFieldErrorMessage: string | undefined;
  verified: boolean;
}

const Heading = styled.h4`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export class AdditionalInfo extends Component<Props, State> {
  state = {
    emailField: "",
    passwordField: "",
    firstName: "",
    lastName: "",
    isError: false,
    emailErrorMessage: "",
    passwordErrorMessage: "",
    textFieldErrorMessage: "",
    verified: false
  };

  onBackButtonClick = () => {
    this.props.history.push("/register");
  };

  handleChange = (event: any) => {
    const inputValue = event.target.value;
    const inputType = event.target.type;
    const typeById = event.target.id;

    if (inputType === "email") {
      this.setState({
        ...this.state,
        emailField: inputValue
      });
    } else if (inputType === "password") {
      this.setState({
        ...this.state,
        passwordField: inputValue
      });
    } else if (typeById === "firstName") {
      this.setState({
        ...this.state,
        firstName: inputValue
      });
    } else if (typeById === "lastName") {
      this.setState({
        ...this.state,
        lastName: inputValue
      });
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { emailField, passwordField, firstName, lastName } = this.state;

    const emailValidation = emailValidator(emailField);
    const passwordValidation = passwordValidator(passwordField);
    const firstNameValidation = textValidator(firstName);
    const lastNameValidation = textValidator(lastName);

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
          lastNameValidation.message}`
      });
    }
  };

  onVerify = (response: string) => {
    if (response !== "") {
      console.log(this.state);
      this.setState({ ...this.state, verified: true });
    }
  };

  render() {
    console.log("render", this.state);
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
              placeholder="Email Address"
              handleChange={this.handleChange}
            />
            <Input
              type="password"
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
              id="firstName"
              placeholder="First Name"
              handleChange={this.handleChange}
            />
            <Input
              type="text"
              id="lastName"
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
