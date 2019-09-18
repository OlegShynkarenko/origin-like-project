import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
  font-size: 1rem;
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
