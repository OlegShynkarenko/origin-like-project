import React, { useState } from "react";
import styled from "styled-components";
import { History } from "history";

import { InputWrapper } from "../../sharedStyledComponents";
import { Input } from "../../../shared/Input/Input";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";

interface Props {
  history: History;
}

const Heading = styled.h4`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AdditionalInfo: React.FC<Props> = props => {
  const [state, setState] = useState({
    emailField: "",
    passwordField: "",
    firstName: "",
    lastName: "",
    isError: false,
    emailErrorMessage: "",
    passwordErrorMessage: ""
  });

  const onBackButtonClick = () => {
    props.history.push("/register");
  };

  return (
    <>
      <Wrapper>
        <h3>Create your account</h3>
        <ButtonComponent onClick={onBackButtonClick} type="button">
          Back
        </ButtonComponent>
      </Wrapper>
      <form>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Email Address"
            handleChange={() => {}}
          />
          <Input
            type="password"
            placeholder="Password"
            handleChange={() => {}}
          />
        </InputWrapper>
        <InputWrapper>
          <Heading>People can find me by searching ...</Heading>
          <Input type="text" placeholder="First Name" handleChange={() => {}} />
          <Input type="text" placeholder="Last Name" handleChange={() => {}} />
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
};
