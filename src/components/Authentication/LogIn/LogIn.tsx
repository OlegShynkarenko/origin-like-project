import React from "react";
import styled from "styled-components";

import { StyledLoginWrapper as LoginWrapper } from "./StyledLoginWrapper";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";

const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 30px;
  border: 1px solid lightgray;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  ${Input}:first-child {
    margin-bottom: 5px;
  }
`;

const ResetLink = styled.a`
  margin-top: 10px;
`;

export const LogIn: React.FC = () => {
  return (
    <LoginWrapper>
      <h3>Log in with your account</h3>
      <InputWrapper>
        <Input
          type="email"
          placeholder={"Type your email example@example.com"}
        />
        <Input type="password" placeholder={"Type your password"} />
      </InputWrapper>
      <ButtonComponent appearance="warning">Log in</ButtonComponent>
      <ResetLink>Forget your password?</ResetLink>
    </LoginWrapper>
  );
};
