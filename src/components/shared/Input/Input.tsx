import React, { useState } from "react";
import styled from "styled-components";

import { passwordValidator } from "../../../utils/validator/validator";
import { emailValidator } from "../../../utils/validator/validator";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  height: 30px;
  border: 1px solid lightgray;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

interface Props extends React.HTMLProps<HTMLInputElement> {
  type: string;
  placeholder: string;
  isValidated: (type: {
    isValid: boolean;
    type: string;
    value: string;
  }) => void;
}

export const Input: React.FC<Props> = ({ type, placeholder, isValidated }) => {
  const [state, setState] = useState({
    isValid: false,
    type: `${type}`,
    value: ""
  });

  const isValid = (inputValue: string, inputType: string) => {
    if (inputType === "email") {
      return emailValidator(inputValue);
    } else if (inputType === "password") {
      return passwordValidator(inputValue);
    }
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    const inputType = event.target.type;
    if (isValid(value, inputType)) {
      setState({
        isValid: true,
        type: `${type}`,
        value
      });
    } else {
      setState({
        isValid: true,
        type: `${type}`,
        value
      });
    }

    if (state.isValid) {
      isValidated(state);
    }
  };

  return (
    <StyledInput
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
