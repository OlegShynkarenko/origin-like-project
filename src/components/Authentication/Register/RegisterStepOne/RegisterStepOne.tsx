import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { History } from "history";
import { match } from "react-router-dom";

import { InputWrapper } from "../../sharedStyledComponents";
import { Select, selectTypes } from "@shared/Select";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { ErrorsWrapper, Error } from "../../sharedStyledComponents";
import { Data } from "../../types/register";

interface Props {
  history: History;
  match: match;
  submitData: (data: Data, type: "step_1" | "step_2") => void;
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
    day: props.data.day,
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
          email: null,
          firstName: null,
          lastName: null,
          password: null,
          country: state.country,
          day: state.day,
          month: state.month,
          year: state.year
        },
        "step_1"
      );
      props.history.push(`${props.match.path}/step-2`);
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
            value={
              props.data.country ? props.data.country : selectTypes.country
            }
            placeholder={selectTypes.country}
            change={handleSetDataToTheState}
          />
        </InputWrapper>
        <InputWrapper>
          <p>Date of birth</p>
          <SelectGroup>
            <Select
              value={props.data.day ? props.data.day : selectTypes.day}
              placeholder={selectTypes.day}
              change={handleSetDataToTheState}
            />
            <Select
              value={props.data.month ? props.data.month : selectTypes.month}
              placeholder={selectTypes.month}
              change={handleSetDataToTheState}
            />
            <Select
              value={props.data.year ? props.data.year : selectTypes.year}
              placeholder={selectTypes.year}
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
