import React, { Component } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AuthAligner, AuthWrapper } from "../sharedStyledComponents";
import { RegisterStepTwo } from "./RegisterStepTwo/RegisterStepTwo";
import { RegisterStepOne } from "./RegisterStepOne/RegisterStepOne";
import { registerUser } from "../../../store/actionCreators/registerUser";
import { History } from "history";
import { Data, User } from "../types/register";

interface State {
  country?: string;
  date?: string;
  month?: string;
  year?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

interface Props extends RouteComponentProps {
  registerUser: (user: User) => void;
  history: History;
}

class Register extends Component<Props, State> {
  state = {
    country: "",
    date: "",
    month: "",
    year: "",
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  componentDidUpdate(): void {
    const id = new Date().valueOf();
    const user = { ...this.state, id };
    if (!Object.values(user).includes("")) {
      this.props.registerUser(user);
      this.props.history.push("/login");
    }
  }

  handleSetUserDataToTheState = (data: Data, type: string) => {
    if (type === "step_1") {
      this.setState(() => {
        return {
          ...this.state,
          country: data.country,
          date: data.date,
          month: data.month,
          year: data.year
        };
      });
    } else if (type === "step_2") {
      this.setState(() => {
        return {
          ...this.state,
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName
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
                <RegisterStepOne
                  {...props}
                  data={this.state}
                  submitData={this.handleSetUserDataToTheState}
                />
              )}
            />
            <Route
              exact
              path="/register/additional-info"
              render={props => (
                <RegisterStepTwo
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
