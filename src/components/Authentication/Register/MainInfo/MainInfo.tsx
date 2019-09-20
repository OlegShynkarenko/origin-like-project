import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { History } from "history";
import { match } from "react-router-dom";

import { InputWrapper } from "../../sharedStyledComponents";
import { Select } from "../Select";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { ErrorsWrapper, Error } from "../../sharedStyledComponents";

interface Data {
  country?: string;
  date?: string;
  month?: string;
  year?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

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

export const MainInfo: React.FC<Props> = props => {
  const [state, setState] = useState({
    country: props.data.country,
    date: props.data.date,
    month: props.data.month,
    year: props.data.year,
    isError: false
  });

  const handleSetDataToTheState = (type: string, value: string) => {
    if (type === "country") {
      setState({ ...state, country: value });
    } else if (type === "date") {
      setState({ ...state, date: value });
    } else if (type === "month") {
      setState({ ...state, month: value });
    } else if (type === "year") {
      setState({ ...state, year: value });
    }
  };
  console.log(state);

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

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    const selectedType = event.target.id;
    handleSetDataToTheState(selectedType, selectedValue);
  };

  const errorMessage = state.isError ? "You should choose all fields" : null;

  return (
    <>
      <h3>Create Your Account</h3>
      <form noValidate onSubmit={handleSubmit}>
        <InputWrapper>
          <p>Country/Region</p>
          <Select
            id="country"
            value={props.data.country}
            type="country"
            onChange={handleSelectChange}
          />
        </InputWrapper>
        <InputWrapper>
          <p>Date of birth</p>
          <SelectGroup>
            <Select
              id="date"
              value={props.data.date}
              type="date"
              onChange={handleSelectChange}
            />
            <Select
              id="month"
              value={props.data.month}
              type="month"
              onChange={handleSelectChange}
            />
            <Select
              id="year"
              value={props.data.year}
              type="year"
              onChange={handleSelectChange}
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
