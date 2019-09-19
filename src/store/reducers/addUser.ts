import { LOGIN_USER } from "../actionTypes";

const initialState = {};

interface Data {
  payload: {
    id: number;
    email: string;
    password: string;
  };
  type: string;
}

export const userLogin = (state = initialState, action: Data) => {
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
