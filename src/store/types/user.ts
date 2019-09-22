export const LOGIN_USER = "LOGIN_USER";

export interface User {
  id: number;
  email: string;
  password: string;
}

export interface LogInUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}

export type UserAction = LogInUserAction;
