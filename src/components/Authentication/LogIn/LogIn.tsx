import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import { StyledLoginWrapper as LoginWrapper } from "./StyledLoginWrapper";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { NavLink } from "react-router-dom";
import { Input } from "../../shared/Input/Input";

const InputWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ResetLink = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

interface Props {
  children?: ReactNode;
  submitData: (inputData: object) => void;
}

export const LogIn: React.FC<Props> = props => {
  const [state, setState] = useState({
    authType: "Login",
    inputData: {
      passwordField: "",
      emailField: ""
    }
  });

  const handleChange = (inputType: string, value: string) => {
    if (inputType === "email") {
      // @ts-ignore
      setState({
        ...state,
        inputData: { ...state.inputData.emailField, value }
      });
    }
    if (inputType === "password") {
      // @ts-ignore
      setState({
        ...state,
        inputData: { ...state.inputData.passwordField, value }
      });
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.submitData(state);
  };

  return (
    <LoginWrapper>
      <h3>Log in with your account</h3>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            handleChange={handleChange}
            type="email"
            placeholder={"Type your email example@example.com"}
          />
          <Input
            handleChange={handleChange}
            type="password"
            placeholder={"Type your password"}
          />
        </InputWrapper>
        <button onSubmit={handleSubmit} type="submit">
          sdfsdf
        </button>
        <ButtonComponent
          type="submit"
          onClick={handleSubmit}
          appearance="warning"
        >
          Log in
        </ButtonComponent>
      </form>
      <ResetLink>
        <NavLink to={"/reset-password"}>Forget your password?</NavLink>
      </ResetLink>
    </LoginWrapper>
  );
};
