import { REGISTER_USER } from "../actionTypes";

interface User {
  country: string;
  date: string;
  month: string;
  year: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const registerUser = (user: User) => {
  console.log("ActionCreator has been called");
  return {
    type: REGISTER_USER,
    payload: user
  };
};
