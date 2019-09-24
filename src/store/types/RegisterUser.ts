export const REGISTER_USER = "REGISTER_USER";

export interface RegisterUser {
  id: number;
  country: string;
  day: string;
  month: string;
  year: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterUserAction {
  type: typeof REGISTER_USER;
  payload: RegisterUser;
}

export type UserAction = RegisterUserAction;
