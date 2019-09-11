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

interface Props extends React.HTMLProps<HTMLInputElement> {
  type: string;
  placeholder: string;
  handleChange: (event: any) => void;
}

export const Input: React.FC<Props> = ({ type, placeholder, handleChange }) => {
  return (
    <StyledInput
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
