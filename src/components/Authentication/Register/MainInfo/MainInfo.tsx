import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { History } from "history";
import { match } from "react-router-dom";

import { InputWrapper } from "../../sharedStyledComponents";
import { Select } from "../Select";
import { ButtonComponent } from "simple-react-library_button-component/lib/Button";
import { ErrorsWrapper, Error } from "../../sharedStyledComponents";

interface Data {
  country?: string | undefined;
  date?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

interface Props {
  history: History;
  match: match;
  submitData: (data: Data, type: string) => void;
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
    country: "",
    date: "",
    month: "",
    year: "",
    isError: false
  });

  let userInfo = { ...state };
  const handleSetDataToTheState = (type: string, value: string) => {
    if (type === "country") {
      userInfo.country = value;
    } else if (type === "date") {
      userInfo.date = value;
    } else if (type === "month") {
      userInfo.month = value;
    } else if (type === "year") {
      userInfo.year = value;
    }

    if (Object.values(userInfo).every(el => el !== "")) {
      setState({
        country: userInfo.country,
        date: userInfo.date,
        month: userInfo.month,
        year: userInfo.year,
        isError: false
      });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.values(state).every(el => el !== "")) {
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
          <Select id="country" type="country" onChange={handleSelectChange} />
        </InputWrapper>
        <InputWrapper>
          <p>Date of birth</p>
          <SelectGroup>
            <Select id="date" type="date" onChange={handleSelectChange} />
            <Select id="month" type="month" onChange={handleSelectChange} />
            <Select id="year" type="year" onChange={handleSelectChange} />
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
