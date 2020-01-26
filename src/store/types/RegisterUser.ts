export const REGISTER_USER = "REGISTER_USER";

export interface RegisterUser {
  country: string;
  birthDate: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterUserAction {
  type: string;
  payload: RegisterUser;
}

export type UserAction = RegisterUserAction;
