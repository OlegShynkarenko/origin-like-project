import React, { FormEvent, ReactNode, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { History } from "history";

import { StyledLoginWrapper as LoginWrapper } from "./StyledLoginWrapper";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { NavLink } from "react-router-dom";
import { Input } from "../../shared/Input/Input";
import { emailValidator } from "../../../utils/validator/validator";
import { passwordValidator } from "../../../utils/validator/validator";
import { saveUser } from "../../../store/actionCreators/saveUser";

const InputWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ResetLink = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

interface authObject {
  id: number;
  email: string;
  password: string;
}

interface Props {
  children?: ReactNode;
  history: History;
  saveUser: (data: authObject) => void;
}

const LogIn: React.FC<Props> = props => {
  const [state, setState] = useState({
    authType: "Login",
    inputData: {
      passwordField: "",
      emailField: ""
    }
  });

  const isValid = (inputValue: string, inputType: string) => {
    if (inputType === "email") {
      return emailValidator(inputValue);
    } else if (inputType === "password") {
      return passwordValidator(inputValue);
    }
  };

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    const inputType = event.target.type;
    if (inputType === "email") {
      setState({
        ...state,
        inputData: { ...state.inputData, emailField: inputValue }
      });
    } else if (inputType === "password") {
      setState({
        ...state,
        inputData: { ...state.inputData, passwordField: inputValue }
      });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const id = new Date().valueOf();
    const {
      inputData: { emailField, passwordField }
    } = state;
    if (isValid(emailField, "email") && isValid(passwordField, "password")) {
      props.saveUser({
        id,
        email: emailField,
        password: passwordField
      });

      props.history.push("/");
    }
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
        <ButtonComponent type="submit" appearance="warning" width="100%">
          Log in
        </ButtonComponent>
      </form>
      <ResetLink>
        <NavLink to={"/reset-password"}>Forget your password?</NavLink>
      </ResetLink>
    </LoginWrapper>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    saveUser: (auth: authObject) => dispatch(saveUser(auth))
  };
}

const logInComponent = connect(
  null,
  mapDispatchToProps
)(LogIn);
export default logInComponent;
