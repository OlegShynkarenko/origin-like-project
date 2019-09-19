export const SAVE_USER = "SAVE_USER";
export const SOME_ACTION = "SOME_ACTION";

export interface User {
  id: number;
  email: string;
  password: string;
}

export interface SaveUserAction {
  type: typeof SAVE_USER;
  payload: User;
}

export interface SomeAction {
  type: typeof SOME_ACTION;
}

export type UserAction = SaveUserAction | SomeAction;
