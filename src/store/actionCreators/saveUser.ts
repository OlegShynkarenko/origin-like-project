import { SaveUserAction, User, SAVE_USER } from "../types/user";

export const saveUser = (auth: User): SaveUserAction => {
  console.log("ActionCreator has been called");
  return { type: SAVE_USER, payload: auth };
};
