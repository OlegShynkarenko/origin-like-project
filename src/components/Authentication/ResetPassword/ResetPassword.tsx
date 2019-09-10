import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { Input } from "../../shared/Input/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";

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
  redirect: boolean;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  submitData: (inputData: object) => void;
}

interface DataObject {
  isValid: boolean;
  type: string;
  value: string;
}

export const ResetPassword: React.FC<Props> = props => {
  const [state, setState] = useState({
    inputData: {
      isValid: false,
      type: "",
      value: ""
    }
  });

  const redirectPage = <Redirect to={"/login"} />;

  const isValidated = (inputData: DataObject) => {
    setState({ inputData: inputData });
  };

  const handleSubmit = () => {
    if (state.inputData.isValid) {
      props.submitData(state.inputData);
    }
  };

  const component = (
    <Wrapper>
      <h3>Password Recovery</h3>
      <p>
        Enter the email address of the account you're having trouble accessing,
        and we'll send you instructions to reset your password
      </p>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            isValidated={isValidated}
            type="email"
            placeholder={"Type your email example@example.com"}
          />
        </InputWrapper>
        <button type="submit">click</button>
        <ButtonComponent type="submit" appearance="warning">
          Send
        </ButtonComponent>
      </form>
    </Wrapper>
  );

  return props.redirect ? redirectPage : component;
};
