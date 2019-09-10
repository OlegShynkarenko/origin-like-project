import React, { FormEventHandler, ReactNode, useState } from "react";
import styled from "styled-components";

import { StyledLoginWrapper as LoginWrapper } from "./StyledLoginWrapper";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { NavLink, Redirect } from "react-router-dom";
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

interface DataObject {
  isValid: boolean;
  type: string;
  value: string;
}

export const LogIn: React.FC<Props> = props => {
  const [state, setState] = useState({
    inputData: {
      isValid: false,
      type: "",
      value: ""
    }
  });

  const isValidated = (inputData: DataObject) => {
    setState({ ...state, ...inputData });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(state);
    if (state.inputData.isValid) {
      props.submitData(state.inputData);
    }
  };

  return (
    <LoginWrapper>
      <h3>Log in with your account</h3>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            isValidated={isValidated}
            type="email"
            placeholder={"Type your email example@example.com"}
          />
          <Input
            isValidated={isValidated}
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
