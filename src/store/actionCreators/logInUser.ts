import { LOGIN_USER } from "../types/user";
import { User, LogInUserAction } from "../types/user";

export const logInUser = (auth: User): LogInUserAction => {
  return {
    type: LOGIN_USER,
    payload: auth
  };
};
