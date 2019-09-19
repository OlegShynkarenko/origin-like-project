import React, { Component } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AuthAligner, AuthWrapper } from "../sharedStyledComponents";
import { AdditionalInfo } from "./AdditionalInfo/AdditionalInfo";
import { MainInfo } from "./MainInfo/MainInfo";
import { registerUser } from "../../../store/actionCreators/registerUser";
import { History } from "history";

interface UserState {
  country: string | undefined;
  dateOfBirth: string | undefined;
  email: string | undefined;
  password: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

interface State {
  userData: UserState;
}

interface User {
  country: string;
  dateOfBirth: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Props extends RouteComponentProps {
  registerUser: (user: User) => void;
  history: History;
}

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

class Register extends Component<Props, State> {
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

  componentDidUpdate(): void {
    const id = new Date().valueOf();
    const user = { ...this.state.userData, id };
    if (Object.values(user).every(el => el !== "")) {
      this.props.registerUser(user);
    }
    this.props.history.push("/login");
  }

  handleSetUserDataToTheState = (data: Data, type: string) => {
    if (type === "step_1") {
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
    } else if (type === "step_2") {
      this.setState(() => {
        return {
          ...this.state,
          userData: {
            ...this.state.userData,
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName
          }
        };
      });
    }
  };

  render() {
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
              render={props => (
                <AdditionalInfo
                  {...props}
                  submitData={this.handleSetUserDataToTheState}
                />
              )}
            />
          </Switch>
        </AuthWrapper>
      </AuthAligner>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    registerUser: (user: User) => dispatch(registerUser(user))
  };
}

const registerComponent = connect(
  null,
  mapDispatchToProps
)(Register);
export default registerComponent;
