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
  handleChange: (inputType: any, value: any) => void;
}

export const Input: React.FC<Props> = ({ type, placeholder, handleChange }) => {
  const isValid = (inputValue: string, inputType: string) => {
    if (inputType === "email") {
      return emailValidator(inputValue);
    } else if (inputType === "password") {
      return passwordValidator(inputValue);
    }
  };

  const handleOnChange = (event: any) => {
    const value = event.target.value;
    const inputType = event.target.type;
    if (isValid(value, inputType)) {
      handleChange(inputType, value);
    } else {
      handleChange("", "");
    }
  };

  return (
    <StyledInput
      type={type}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
};
