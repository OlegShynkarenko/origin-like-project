import { LOGIN_USER } from "../actionTypes";
import { authObject } from "../../components/Authentication/LogIn/interfaces";

export const saveUser = (auth: authObject) => {
  console.log("ActionCreator has been called");
  return {
    type: LOGIN_USER,
    payload: auth
  };
};
