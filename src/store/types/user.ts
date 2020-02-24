export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export interface User {
  email: string | null;
  password: string | null;
}

export interface LogInUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}

export interface userCredentials {
  email: string;
  name: string;
  error: string;
}

export interface LogInUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: userCredentials;
}

export type UserAction = LogInUserAction;
