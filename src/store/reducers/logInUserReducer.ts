import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "../types/user";
import { userCredentials } from "../types/user";

const initialState = {
  auth: {
    user: null,
    error: null
  }
};

interface loggedUser {
  email: string;
  name: string;
}

export interface State {
  auth: {
    user: null | loggedUser;
    error: null | string;
  };
}

interface Data {
  payload: userCredentials;
  type: string;
}

export const logInUserReducer = (state = initialState, action: Data) => {
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      auth: {
        user: {
          email: action.payload.email,
          name: action.payload.name
        },
        error: null
      }
    };
  } else if (action.type === LOGIN_USER_FAIL) {
    return {
      ...state,
      auth: {
        user: null,
        error: action.payload.error
      }
    };
  } else {
    return state;
  }
};
