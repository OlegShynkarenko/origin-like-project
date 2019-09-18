import React from "react";

import {
  optionCountry,
  dateOption,
  monthOption,
  yearOption
} from "./selectOtions";
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

interface Props extends React.HTMLProps<HTMLSelectElement> {
  type: string;
  onChange: (event: any) => void;
}

export const Select: React.FC<Props> = props => {
  const renderOptions = () => {
    if (props.type === "country") {
      return optionCountry.map(country => {
        return (
          <option key={country} value={country}>
            {country}
          </option>
        );
      });
    } else if (props.type === "date") {
      return dateOption.map(date => {
        return (
          <option key={date} value={date}>
            {date}
          </option>
        );
      });
    } else if (props.type === "month") {
      return monthOption.map(month => {
        return (
          <option key={month} value={month}>
            {month}
          </option>
        );
      });
    } else if (props.type === "year") {
      return yearOption.map(year => {
        return (
          <option key={year} value={year}>
            {year}
          </option>
        );
      });
    }
  };

  const defaultOption =
    props.type.charAt(0).toUpperCase() + props.type.slice(1);

  return (
    <SelectComponent
      id={props.id}
      defaultValue={defaultOption}
      onChange={props.onChange}
    >
      <option value={defaultOption} disabled>
        {defaultOption}
      </option>
      {renderOptions()}
    </SelectComponent>
  );
};
