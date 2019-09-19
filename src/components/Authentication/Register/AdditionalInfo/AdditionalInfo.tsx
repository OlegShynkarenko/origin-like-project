import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { History } from "history";

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
  country?: string | undefined;
  date?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

interface State {
  emailField: string;
  passwordField: string;
  firstName: string;
  lastName: string;
  isError: boolean;
  emailErrorMessage: string | undefined;
  passwordErrorMessage: string | undefined;
  firstNameErrorMessage: string | undefined;
  lastNameErrorMessage: string | undefined;
}

const Heading = styled.h4`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AdditionalInfo: React.FC<Props> = props => {
  const [state, setState] = useState<State>({
    emailField: "",
    passwordField: "",
    firstName: "",
    lastName: "",
    isError: false,
    emailErrorMessage: "",
    passwordErrorMessage: "",
    firstNameErrorMessage: "",
    lastNameErrorMessage: ""
  });

  const onBackButtonClick = () => {
    props.history.push("/register");
  };

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    const inputType = event.target.type;
    const typeById = event.target.id;

    if (inputType === "email") {
      setState({
        ...state,
        emailField: inputValue
      });
    } else if (inputType === "password") {
      setState({
        ...state,
        passwordField: inputValue
      });
    } else if (typeById === "firstName") {
      setState({
        ...state,
        firstName: inputValue
      });
    } else if (typeById === "lastName") {
      setState({
        ...state,
        lastName: inputValue
      });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { emailField, passwordField, firstName, lastName } = state;

    const emailValidation = emailValidator(emailField);
    const passwordValidation = passwordValidator(passwordField);
    const firstNameValidation = textValidator(firstName);
    const lastNameValidation = textValidator(lastName);

    if (emailValidation.isValid && passwordValidation.isValid) {
      props.submitData(
        {
          email: state.emailField,
          password: state.passwordField,
          firstName: state.firstName,
          lastName: state.lastName
        },
        "step_2"
      );
    } else {
      setState({
        ...state,
        isError: true,
        emailErrorMessage: emailValidation.message,
        passwordErrorMessage: passwordValidation.message,
        firstNameErrorMessage: firstNameValidation.message,
        lastNameErrorMessage: lastNameValidation.message
      });
    }
  };

  return (
    <>
      <Wrapper>
        <h3>Create your account</h3>
        <ButtonComponent onClick={onBackButtonClick} type="button">
          Back
        </ButtonComponent>
      </Wrapper>
      <form noValidate onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Email Address"
            handleChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            handleChange={handleChange}
          />
        </InputWrapper>
        <ErrorsWrapper>
          <Error>{state.emailErrorMessage}</Error>
          <Error>{state.passwordErrorMessage}</Error>
        </ErrorsWrapper>
        <InputWrapper>
          <Heading>People can find me by searching ...</Heading>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            handleChange={handleChange}
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            handleChange={handleChange}
          />
        </InputWrapper>
        <ErrorsWrapper>
          <Error>{state.firstNameErrorMessage}</Error>
          <Error>{state.lastNameErrorMessage}</Error>
        </ErrorsWrapper>
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
};
