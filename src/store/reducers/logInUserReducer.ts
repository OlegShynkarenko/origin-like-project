import { LOGIN_USER } from "../types/user";
import { User } from "../types/user";

const initialState = {};

interface Data {
  payload: User;
  type: string;
}

export const userLogIn = (state = initialState, action: Data) => {
  if (action.type === LOGIN_USER) {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  } else {
    return state;
  }
};
