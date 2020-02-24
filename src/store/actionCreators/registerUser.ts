import {
  REGISTER_USER,
  RegisterUser,
  RegisterUserAction
} from "../types/RegisterUser";

export const registerUser = (user: RegisterUser): RegisterUserAction => {
  return {
    type: REGISTER_USER,
    payload: user
  };
};
