import { REGISTER_USER } from "../types/RegisterUser";
import { RegisterUser, RegisterUserAction } from "../types/RegisterUser";

export const registerUser = (user: RegisterUser): RegisterUserAction => {
  return {
    type: REGISTER_USER,
    payload: user
  };
};
