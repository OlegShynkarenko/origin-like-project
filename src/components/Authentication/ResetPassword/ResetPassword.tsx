import React, { FormEvent, ReactNode, useState } from "react";
import styled from "styled-components";
import { History } from "history";

import { Input } from "../../shared/Input/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { emailValidator } from "../../../utils/validator/validator";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 50px;
  color: #000;
  width: 400px;
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

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
    <Wrapper>
      <h3>Password Recovery</h3>
      <p>
        Enter the email address of the account you're having trouble accessing,
        and we'll send you instructions to reset your password
      </p>
      <form onSubmit={handleSubmit}>
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
    </Wrapper>
  );
};
