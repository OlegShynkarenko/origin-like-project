import React from "react";

import {
  countryOptions,
  dateOptions,
  monthOptions,
  yearOptions
} from "../../Authentication/Register/selectOtions";
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
  change: (type: string, value: string) => void;
  value: string | undefined;
}

const optionsTypes = {
  country: countryOptions,
  date: dateOptions,
  month: monthOptions,
  year: yearOptions
};

export const Select: React.FC<Props> = props => {
  const renderOptions = (type: string) => {
    // @ts-ignore
    const options = optionsTypes[type];
    // @ts-ignore
    return options.map(opt => {
      return (
        <option key={opt} value={opt}>
          {opt}
        </option>
      );
    });
    // if (props.type === "country") {
    //   return countryOptions.map(country => {
    //     return (
    //       <option key={country} value={country}>
    //         {country}
    //       </option>
    //     );
    //   });
    // } else if (props.type === "date") {
    //   return dateOptions.map(date => {
    //     return (
    //       <option key={date} value={date}>
    //         {date}
    //       </option>
    //     );
    //   });
    // } else if (props.type === "month") {
    //   return monthOptions.map(month => {
    //     return (
    //       <option key={month} value={month}>
    //         {month}
    //       </option>
    //     );
    //   });
    // } else if (props.type === "year") {
    //   return yearOptions.map(year => {
    //     return (
    //       <option key={year} value={year}>
    //         {year}
    //       </option>
    //     );
    //   });
    // }
  };

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const selectedValue = event.currentTarget.value;
    const selectedType = props.role;
    if (selectedType != null) {
      props.change(selectedType, selectedValue);
    }
  };

  let defaultVal;
  if (props.value !== "") {
    defaultVal = props.value;
  } else {
    defaultVal = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  }

  return (
    <SelectComponent
      role={props.role}
      onChange={handleChange}
      defaultValue={defaultVal}
    >
      <option defaultValue={defaultVal} disabled>
        {defaultVal}
      </option>
      {renderOptions(props.type)}
    </SelectComponent>
  );
};
