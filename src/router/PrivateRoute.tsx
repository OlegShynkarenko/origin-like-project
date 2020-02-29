import React, { ReactNode } from "react";
import { State } from "../components/Authentication/types/logIn";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const privateRoute = (props: any) => {
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
