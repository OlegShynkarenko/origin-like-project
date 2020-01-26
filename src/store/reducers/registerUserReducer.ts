import { REGISTER_USER, RegisterUser } from "../types/RegisterUser";

const initialState = {};

interface Data {
  payload: RegisterUser;
  type: string;
}

export const registerUserReducer = (state = initialState, action: Data) => {
  if (action.type === REGISTER_USER) {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      email: action.payload.email,
      password: action.payload.password,
      country: action.payload.country,
      birthDate: action.payload.birthDate
    };
  } else {
    return state;
  }
};
