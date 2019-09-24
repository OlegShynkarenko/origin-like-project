import React, { FormEvent, ReactNode, useState } from "react";
import { History } from "history";

import { Input, inputTypes } from "../../../shared/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { isEmailValid } from "../../../validator";
import {
  InputWrapper,
  AuthAligner,
  AuthWrapper,
  Error,
  ErrorsWrapper
} from "../sharedStyledComponents";

interface Props {
  children?: ReactNode;
  history: History;
}

interface State {
  authType: string;
  emailField: string;
  emailErrorMessage: string | undefined;
}

export const ResetPassword: React.FC<Props> = props => {
  const [state, setState] = useState<State>({
    authType: "reset password",
    emailField: "",
    emailErrorMessage: ""
  });

  const handleChange = (value: string) => {
    setState({
      ...state,
      emailField: value,
      emailErrorMessage: ""
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const emailValidation = isEmailValid(state.emailField);
    if (emailValidation.isValid) {
      props.history.push("/login");
    } else {
      setState({
        ...state,
        emailErrorMessage: emailValidation.message
      });
    }
  };

  return (
    <AuthAligner>
      <AuthWrapper>
        <h3>Password Recovery</h3>
        <p>
          Enter the email address of the account you're having trouble
          accessing, and we'll send you instructions to reset your password
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <InputWrapper>
            <Input
              handleChange={handleChange}
              type={inputTypes.attributes.email}
              placeholder={"Type your email example@example.com"}
            />
          </InputWrapper>
          <ErrorsWrapper>
            <Error>{state.emailErrorMessage}</Error>
          </ErrorsWrapper>
          <ButtonComponent type="submit" appearance="warning" width="100%">
            Send
          </ButtonComponent>
        </form>
      </AuthWrapper>
    </AuthAligner>
  );
};
