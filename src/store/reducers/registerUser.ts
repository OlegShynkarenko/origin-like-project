import { REGISTER_USER, RegisterUser } from "../types/RegisterUser";

const initialState = {};

interface Data {
  payload: RegisterUser;
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
      birthDate: `${action.payload.date} ${action.payload.month} ${action.payload.year}`
    };
  } else {
    return state;
  }
};
