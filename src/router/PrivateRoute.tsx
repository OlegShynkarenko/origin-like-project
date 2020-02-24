import React, { ReactNode } from "react";
import { State } from "../components/Authentication/types/logIn";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

interface User {
  user: object | null;
}
interface Auth {
  auth: User;
}
interface prop {
  login: Auth;
  children?: ReactNode;
}

export const privateRoute = (props: prop) => {
  console.log(props);
  return (
    <>
      {props.login.auth.user ? props.children : <Redirect to="/auth/login" />}
    </>
  );
};

function mapStateToProps(state: State) {
  return state;
}

export const PrivateRoute = connect(
  mapStateToProps,
  null
)(privateRoute);
