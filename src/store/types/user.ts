export const LOGIN_USER = "LOGIN_USER";

export interface User {
  email: string | null;
  password: string | null;
}

export interface LogInUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}

export type UserAction = LogInUserAction;
