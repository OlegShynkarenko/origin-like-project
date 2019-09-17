import React, { FormEvent, ReactNode, useState } from "react";
import { History } from "history";

import { Input } from "../../shared/Input/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { emailValidator } from "../../../utils/validator/validator";
import {
  InputWrapper,
  AuthAligner,
  AuthWrapper
} from "../sharedStyledComponents";

interface Props {
  children?: ReactNode;
  history: History;
}

export const ResetPassword: React.FC<Props> = props => {
  const [state, setState] = useState({
    authType: "reset password",
    inputData: {
      emailField: ""
    }
  });

  const isValid = (inputValue: string) => {
    return emailValidator(inputValue);
  };

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    setState({
      authType: "reset password",
      ...state,
      inputData: { ...state.inputData, emailField: inputValue }
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isValid(state.inputData.emailField)) {
      console.log("Submit reset password");
      props.history.push("/login");
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
              type="email"
              placeholder={"Type your email example@example.com"}
            />
          </InputWrapper>
          <ButtonComponent type="submit" appearance="warning" width="100%">
            Send
          </ButtonComponent>
        </form>
      </AuthWrapper>
    </AuthAligner>
  );
};
