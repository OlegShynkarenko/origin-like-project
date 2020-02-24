import React from "react";

import {
  countryOptions,
  dateOptions,
  monthOptions,
  yearOptions
} from "../../components/Authentication/Register/selectOtions";
import styled from "styled-components";

const SelectComponent = styled.select`
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  background: none;
  padding: 10px;
  margin-top: 5px;
  outline: none;
  &:active {
    border-color: rgb(255, 171, 0);
  }
`;

export const selectTypes = {
  country: "Country",
  day: "Day",
  month: "Month",
  year: "Year"
};

interface Props {
  placeholder: string;
  change: (type: string, value: string) => void;
  value: string | null;
}

const optionsTypes = {
  [selectTypes.country]: countryOptions,
  [selectTypes.day]: dateOptions,
  [selectTypes.month]: monthOptions,
  [selectTypes.year]: yearOptions
};

export const Select: React.FC<Props> = props => {
  const renderOptions = (type: string) => {
    const options: Array<string | number> = optionsTypes[type];

    return options.map(opt => {
      return (
        <option key={opt} value={opt}>
          {opt}
        </option>
      );
    });
  };

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    props.change(props.placeholder.toLowerCase(), event.currentTarget.value);
  };

  return (
    <SelectComponent
      onChange={handleChange}
      defaultValue={props.value || props.placeholder}
    >
      <option defaultValue={props.placeholder} disabled>
        {props.placeholder}
      </option>
      {renderOptions(props.placeholder)}
    </SelectComponent>
  );
};
