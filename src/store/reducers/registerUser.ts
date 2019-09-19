import { REGISTER_USER } from "../actionTypes";

const initialState = {};

interface Data {
  payload: {
    id: number;
    country: string;
    dateOfBirth: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  type: string;
}

export const registerUser = (state = initialState, action: Data) => {
  if (action.type === REGISTER_USER) {
    return {
      ...state,
      id: action.payload.id,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      email: action.payload.email,
      password: action.payload.password,
      country: action.payload.country,
      birthDate: action.payload.dateOfBirth
    };
  } else {
    return state;
  }
};
