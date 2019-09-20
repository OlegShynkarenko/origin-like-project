import React from "react";
import styled from "styled-components";

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

export type InputEvent = React.FormEvent<HTMLInputElement>;

interface Props extends React.HTMLProps<HTMLInputElement> {
  type: string;
  placeholder: string;
  role: string;
  handleChange: (type: string, value: string) => void;
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  handleChange,
  role
}) => {
  const handleOnChange = (event: InputEvent) => {
    const value = event.currentTarget.value;
    handleChange(value, role);
  };

  return (
    <StyledInput
      role={role}
      type={type}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
};
