import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(169, 169, 169);
  padding: 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: rgb(255, 171, 0);
  }
`;

export type InputEvent = React.FormEvent<HTMLInputElement>;

interface Props extends React.HTMLProps<HTMLInputElement> {
  type: string;
  placeholder: string;
  handleChange: (value: Nullable<string>) => void;
}

export const inputDOMTypes = {
  email: "email",
  password: "password",
  text: "text"
};

export const ownInputFieldTypes = {
  emailField: "emailField",
  passwordField: "passwordField",
  firstName: "firstName",
  lastName: "lastName"
};

export const Input: React.FC<Props> = ({ type, placeholder, handleChange }) => {
  const handleOnChange = (event: InputEvent) => {
    handleChange(event.currentTarget.value);
  };

  return (
    <StyledInput
      type={type}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
};
