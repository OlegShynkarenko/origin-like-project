import { LOGIN_USER } from "../actionTypes";
import { authObject } from "../../components/Authentication/LogIn/interfaces";

const initialState = {
  auth: {}
};

interface Data {
  payload: authObject;
  type: string;
}

export const logInUser = (state = initialState, action: Data) => {
  if (action.type === LOGIN_USER) {
    return {
      ...state,
      auth: {
        id: action.payload.id,
        email: action.payload.email,
        password: action.payload.password
      }
    };
  } else {
    return state;
  }
};
