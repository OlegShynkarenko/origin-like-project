import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { History } from "history";
import { match } from "react-router-dom";

import { InputWrapper } from "../../sharedStyledComponents";
import { Select } from "../../../shared/Select";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { ErrorsWrapper, Error } from "../../sharedStyledComponents";
import { Data } from "../../types/register";

interface Props {
  history: History;
  match: match;
  submitData: (data: Data, type: string) => void;
  data: Data;
}

const SelectGroup = styled.div`
  display: flex;
  justify-content: space-between;
  select:nth-child(2) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const RegisterStepOne: React.FC<Props> = props => {
  const [state, setState] = useState({
    country: props.data.country,
    date: props.data.date,
    month: props.data.month,
    year: props.data.year,
    isError: false
  });

  const handleSetDataToTheState = (type: string, value: string) => {
    setState({ ...state, [type]: value, isError: false });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!Object.values(state).includes("")) {
      props.submitData(
        {
          country: state.country,
          date: state.date,
          month: state.month,
          year: state.year
        },
        "step_1"
      );
      props.history.push(`${props.match.path}/additional-info`);
    } else {
      setState({ ...state, isError: true });
    }
  };

  const errorMessage = state.isError ? "You should choose all fields" : null;

  return (
    <>
      <h3>Create Your Account</h3>
      <form noValidate onSubmit={handleSubmit}>
        <InputWrapper>
          <p>Country/Region</p>
          <Select
            role="country"
            value={props.data.country}
            type="country"
            change={handleSetDataToTheState}
          />
        </InputWrapper>
        <InputWrapper>
          <p>Date of birth</p>
          <SelectGroup>
            <Select
              role="date"
              value={props.data.date}
              type="date"
              change={handleSetDataToTheState}
            />
            <Select
              role="month"
              value={props.data.month}
              type="month"
              change={handleSetDataToTheState}
            />
            <Select
              role="year"
              value={props.data.year}
              type="year"
              change={handleSetDataToTheState}
            />
          </SelectGroup>
        </InputWrapper>
        <ButtonComponent
          height={"41px"}
          type="submit"
          appearance="warning"
          width="100%"
        >
          Next
        </ButtonComponent>
        <ErrorsWrapper>
          <Error>{errorMessage}</Error>
        </ErrorsWrapper>
      </form>
    </>
  );
};
