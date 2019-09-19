import { LOGIN_USER } from "../actionTypes";

interface authObject {
  id: number;
  email: string;
  password: string;
}

export const logInUser = (auth: authObject) => {
  return {
    type: LOGIN_USER,
    payload: auth
  };
};
