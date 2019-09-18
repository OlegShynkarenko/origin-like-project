import React, { Component } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

import { AuthAligner, AuthWrapper } from "../sharedStyledComponents";
import { AdditionalInfo } from "./AdditionalInfo/AdditionalInfo";
import { MainInfo } from "./MainInfo/MainInfo";

interface User {
  country: string;
  dateOfBirth: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface State {
  userData: User;
}

interface Data {
  country: string;
  date: string;
  month: string;
  year: string;
}

interface DataV2 {
  country: string;
  date: string;
  month: string;
  year: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class Register extends Component<RouteComponentProps, State> {
  state = {
    userData: {
      country: "",
      dateOfBirth: "",
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    }
  };

  handleSetUserDataToTheState = (data: Data | DataV2, type: string) => {
    console.log(data);
    if (type === "main") {
      this.setState(() => {
        return {
          ...this.state,
          userData: {
            ...this.state.userData,
            country: data.country,
            dateOfBirth: `${data.date} ${data.month} ${data.year}`
          }
        };
      });
    } else if (type === "additional") {
    }
  };

  render() {
    console.log("REGISTER STATE", this.state);
    return (
      <AuthAligner>
        <AuthWrapper>
          <Switch>
            <Route
              exact
              path="/register"
              render={props => (
                <MainInfo
                  {...props}
                  submitData={this.handleSetUserDataToTheState}
                />
              )}
            />
            <Route
              exact
              path="/register/additional-info"
              component={AdditionalInfo}
            />
          </Switch>
        </AuthWrapper>
      </AuthAligner>
    );
  }
}
